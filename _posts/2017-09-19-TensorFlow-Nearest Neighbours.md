---
layout: post
title: TensorFlow Nearest Neighbors
published: true
---
![](/images/tensorflow.jpg)  

Nowadays, with the advent of lastest apps and services which are generating data at a rate incomprehensible just 3 years in the past, its important to sort the incoming data into logical groups. This sorting of data would later prove useful for recognizing new data generated based on the similarities in its properties.  

While we contemplate the thought of sorting data into groups, we simply visualize it as arranging the data into an ascending or descending order, when in reality a lot different sortings are possible based on the statistical metrics like mean, standard deviation and variance.  

Also the data wouldn't always be in a quantifiable form i.e numeric data, but may also occur in textual and audio-visual form.  

Once the data falls out of the traditional sorting paradigms created for numerical data, ```clustering``` comes in.  

> K-means is one such clustering algorithm for automatically grouping the data into congruent clusters.  

Its the most widely used clustering algorithm till date.  

Let's see a small overview of the algorithm:  

Here we are considering that the data you want to cluster belongs to 2 distinct categories (cat1 and cat2).  

Steps:  

1. Randomly allocate 2 points as the cluster centroids
keep 



```python
import numpy as np
import tensorflow as tf

# Import MINST data
from tensorflow.examples.tutorials.mnist import input_data
mnist = input_data.read_data_sets("/tmp/data/", one_hot=True)
```
Extracting MNIST_data/train-images-idx3-ubyte.gz  
Extracting MNIST_data/train-labels-idx1-ubyte.gz  
Extracting MNIST_data/t10k-images-idx3-ubyte.gz  
Extracting MNIST_data/t10k-labels-idx1-ubyte.gz  
```python
# In this example, we limit mnist data
Xtr, Ytr = mnist.train.next_batch(5000) #5000 for training (nn candidates)
Xte, Yte = mnist.test.next_batch(200) #200 for testing

# tf Graph Input
xtr = tf.placeholder("float", [None, 784])
xte = tf.placeholder("float", [784])

# Nearest Neighbor calculation using L1 Distance
# Calculate L1 Distance
distance = tf.reduce_sum(tf.abs(tf.add(xtr, tf.negative(xte))), reduction_indices=1)
# Prediction: Get min distance index (Nearest neighbor)
pred = tf.arg_min(distance, 0)

accuracy = 0.

# Initialize the variables (i.e. assign their default value)
init = tf.global_variables_initializer()
```
```python
# Start training
with tf.Session() as sess:
    sess.run(init)

    # loop over test data
    for i in range(len(Xte)):
        # Get nearest neighbor
        nn_index = sess.run(pred, feed_dict={xtr: Xtr, xte: Xte[i, :]})
        # Get nearest neighbor class label and compare it to its true label
        print "Test", i, "Prediction:", np.argmax(Ytr[nn_index]), \
            "True Class:", np.argmax(Yte[i])
        # Calculate accuracy
        if np.argmax(Ytr[nn_index]) == np.argmax(Yte[i]):
            accuracy += 1./len(Xte)
    print "Done!"
    print "Accuracy:", accuracy
```
Test 0 Prediction: 7 True Class: 7  
Test 1 Prediction: 2 True Class: 2  
Test 2 Prediction: 1 True Class: 1  
            .  
            .  
            .   
Test 194 Prediction: 0 True Class: 0  
Test 195 Prediction: 1 True Class: 3  
Test 196 Prediction: 1 True Class: 1  
Test 197 Prediction: 6 True Class: 6  
Test 198 Prediction: 4 True Class: 4  
Test 199 Prediction: 2 True Class: 2  
Done!  
Accuracy: 0.92  

