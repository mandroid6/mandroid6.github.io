---
layout: post
title: Essential Machine learning Libraries - III
published: true
---

![](/images/tensorflow.jpg)

Hi guys,

In this tutorial we will be covering the basic Tensorflow operations and then use it for model creation, training and testing in the next post.


Before diving into the basic of Tensorflow it is essential to understand what a tensor means.

>Tensor is the primary unit of data in TensorFlow. It consists of a set of primitive values shaped into an array of any number of dimensions.
Rank of tensor is its number of dimensions.

```python
3 # a rank 0 tensor; this is a scalar with shape []
[1., 2., 3.] # a rank 1 tensor; this is a vector with shape [3]
[[1., 2., 3.], [4., 5., 6.]] # a rank 2 tensor; a matrix with shape [2, 3]
[[[1., 2., 3.]], [[7., 8., 9.]]] # a rank 3 tensor with shape [2, 1, 3]
```

# So what is Tensorflow?

TensorFlow is an open source software library which utilizes data flow graphs for numerical computations.
>Confused? :P

In simple terms, ```tf``` comprisesof the following elements:

1. ```Nodes``` - These can be considered as connectioning points between two branches of a tree. In context of tf, these nodes represent maths operations

2. ```Graph edges``` - These are analogous to the branches of a very large tree connected through these nodes. The graph edges represent the tensors used for information exhange between the nodes


For my own visual memory and yours, I like to think of these ``multidimensional arrays(tensors)`` as air flowing all around us, only to be affected by obstructions to it(nodes) 
>So you can interpret it as Tensors flowing everywhere around you!

There are two flavors of TensorFlow which a developer can work with:
 1. TensorFlow Core - This is the lowest level API which provied you with complete programming control
 
 2. Higher level APIs - Built on top of TensorFlow Core which are simple to learn 
 
 
Even though it might appear that simply able to use TensorFlow's high level APIs would be enough to kickstart your deep learning journey, its always better to first touch up on the basics - to know whats happening under the hood.

So this tutorial will be covering the 1. TensorFlow Core flavour, on which we can expand our learning in the next tutorials.

# The Computational Graph

It's a series of tf operations which are placed on a graph made up of these multiple nodes.

Everytime you start writing a ```tf``` code, separate it into two tasks of building and running the graphs.

Nodes take zero or more tensors as inputs and produces a tensor as output. 

>Let's now dive into the fundamentals

## Constants
A type of node which takes no inputs but stores a fixed value internally.
```python
import tensorflow as tf

a = tf.constant([1, 2, 4, 6])
b = tf.constant([5, 6, 7, 9])

# Or else you can also create constants of a particular datatype
c = tf.constant(3.0, dtype=tf.float32)

print(a, b, c)
```
### Output

Tensor("Const:0", shape=(4,), dtype=int32) Tensor("Const_1:0", shape=(4,), dtype=int32) Tensor("Const_2:0", shape=(), dtype=float32)


``Definitely not expected right?``

These nodes are simply a form of representation given to the values stored in them, so they are not directly printable without evaluation.

For evaluating these nodes we need to run the computational graph inside a ```session```.

To create a Session instance and call its run method for evaluating our constants, use this:
```python
sess = tf.Session()
print(sess.run([a, b, c]))
```
As required we get the outputs
```python
[array([1, 2, 4, 6]), array([5, 6, 7, 9]), 3.0]
```

Now for the operations part, we can have a lot of them like

```python
x = tf.add(a, b)
y = tf.subtract(a, b)
z = tf.multiply(a, b)
w = tf.divide(a, b)
```
If we print the above using

```python
print("x: ", x)
print("y: ", y)
print("z: ", z)
print("w: ", w)

print("sess.run([x, y, z, w]):", sess.run([x, y, z, w]))

```
We get

```python
x:  Tensor("Add:0", shape=(4,), dtype=int32)
y:  Tensor("Sub:0", shape=(4,), dtype=int32)
z:  Tensor("Mul:0", shape=(4,), dtype=int32)
w:  Tensor("truediv:0", shape=(4,), dtype=float64)

sess.run([x, y, z, w]): [array([ 6,  8, 11, 15]), array([-4, -4, -3, -3]), array([ 5, 12, 28, 54]), array([ 0.2       ,  0.33333333,  0.57142857,  0.66666667])]
```

## Placeholders

```python

# Basic Operations with variable as graph input
# The value returned by the constructor represents the output
# of the Variable op. (define as input when running session)
# tf Graph input
a = tf.placeholder(tf.int16)
b = tf.placeholder(tf.int16)

```
Doing some operations on them

```python
add = tf.add(a, b)
mul = tf.multiply(a, b)

# Launch the default graph.
with tf.Session() as sess:
    # Run every operation with variable input
    print "Addition with variables: %i" % sess.run(add, feed_dict={a: 2, b: 3})
    print "Multiplication with variables: %i" % sess.run(mul, feed_dict={a: 2, b: 3})

```
Addition with variables: 5
Multiplication with variables: 6

## Linear Regression

To get a better grasp over how exactly do we use TensorFlow for creating machine learning models, lets try out a simple regression model
###  	 1. Importing necessary libs
```python
import tensorflow as tf
import numpy
rng = numpy.random
```
### 	2. Input the required parameters
```python
learning_rate = 0.01
training_epochs = 1000
display_step = 50
```

### 	3. Create or Import labeled training data 
```python
train_X = numpy.asarray([3.3,4.4,5.5,6.71,6.93,4.168,9.779,6.182,7.59,2.167,
                         7.042,10.791,5.313,7.997,5.654,9.27,3.1])
train_Y = numpy.asarray([1.7,2.76,2.09,3.19,1.694,1.573,3.366,2.596,2.53,1.221,
                         2.827,3.465,1.65,2.904,2.42,2.94,1.3])
n_samples = train_X.shape[0]
```
### 	4. Start creating your computational graph
This step is the differentiating factor between TensorFlow and other libraries

```python
# tf Graph Input
X = tf.placeholder("float")
Y = tf.placeholder("float")

# Set model weights
W = tf.Variable(rng.randn(), name="weight")
b = tf.Variable(rng.randn(), name="bias")
```
### 	5. Using simple math operations for constructing linear model
```python
pred = tf.add(tf.multiply(X, W), b)
```

### 	6. Cost function
```python
# Mean squared error
cost = tf.reduce_sum(tf.pow(pred-Y, 2))/(2*n_samples)
# Gradient descent
optimizer = tf.train.GradientDescentOptimizer(learning_rate).minimize(cost)
```

### 	7. Initialize the variables

```python
init = tf.global_variables_initializer()
```

### 	8. Training the Model

```python
with tf.Session() as sess:
    sess.run(init)

    # Fit all training data
    for epoch in range(training_epochs):
        for (x, y) in zip(train_X, train_Y):
            sess.run(optimizer, feed_dict={X: x, Y: y})

        #Display logs per epoch step
        if (epoch+1) % display_step == 0:
            c = sess.run(cost, feed_dict={X: train_X, Y:train_Y})
            print "Epoch:", '%04d' % (epoch+1), "cost=", "{:.9f}".format(c), \
                "W=", sess.run(W), "b=", sess.run(b)

    print "Optimization Finished!"
    training_cost = sess.run(cost, feed_dict={X: train_X, Y: train_Y})
    print "Training cost=", training_cost, "W=", sess.run(W), "b=", sess.run(b), '\n'

    #Graphic display
    plt.plot(train_X, train_Y, 'ro', label='Original data')
    plt.plot(train_X, sess.run(W) * train_X + sess.run(b), label='Fitted line')
    plt.legend()
    plt.show()
```

Epoch: 0050 cost= 0.195095107 W= 0.441748 b= -0.580876
Epoch: 0100 cost= 0.181448311 W= 0.430319 b= -0.498661
Epoch: 0150 cost= 0.169377610 W= 0.419571 b= -0.421336
Epoch: 0200 cost= 0.158700854 W= 0.409461 b= -0.348611
Epoch: 0250 cost= 0.149257123 W= 0.399953 b= -0.28021
Epoch: 0300 cost= 0.140904188 W= 0.391011 b= -0.215878
Epoch: 0350 cost= 0.133515999 W= 0.3826 b= -0.155372
Epoch: 0400 cost= 0.126981199 W= 0.374689 b= -0.0984639
Epoch: 0450 cost= 0.121201262 W= 0.367249 b= -0.0449408
Epoch: 0500 cost= 0.116088994 W= 0.360252 b= 0.00539905
Epoch: 0550 cost= 0.111567356 W= 0.35367 b= 0.052745
Epoch: 0600 cost= 0.107568085 W= 0.34748 b= 0.0972751
Epoch: 0650 cost= 0.104030922 W= 0.341659 b= 0.139157
Epoch: 0700 cost= 0.100902475 W= 0.336183 b= 0.178547
Epoch: 0750 cost= 0.098135538 W= 0.331033 b= 0.215595
Epoch: 0800 cost= 0.095688373 W= 0.32619 b= 0.25044
Epoch: 0850 cost= 0.093524046 W= 0.321634 b= 0.283212
Epoch: 0900 cost= 0.091609895 W= 0.317349 b= 0.314035
Epoch: 0950 cost= 0.089917004 W= 0.31332 b= 0.343025
Epoch: 1000 cost= 0.088419855 W= 0.30953 b= 0.370291
Optimization Finished!
Training cost= 0.0884199 W= 0.30953 b= 0.370291 


