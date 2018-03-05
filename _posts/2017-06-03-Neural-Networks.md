---
layout: post
title: Neural Networks
published: false
---
http://neuralnetworksanddeeplearning.com/chap2.html
http://news.mit.edu/2017/explained-neural-networks-deep-learning-0414
http://www.holehouse.org/mlclass/
https://techcrunch.com/2017/04/13/neural-networks-made-easy/

Hi guys,  

After having gotten a basic understanding of machine learning( [part 1](https://mandroid6.github.io/2017/04/03/Machine-Learning-Classification/) and [part 2](https://mandroid6.github.io/2017/04/15/Machine-Learning-Regression/)) and (gradient descent)[https://mandroid6.github.io/2017/05/05/Gradient-Descent/], I think its time to dive into a more complex learning paradigm called neural networks. Though there are many other machine learning algorithms like k-means and SVM, but my primary area of interest in in deep learning whose main tools of trade are neural network (in fact the deep ones).


The flow of the post will be similar previous posts. First we will discuss the basic intuition about neural networks and then dive into the finer details.

## Intuition

Our brains are composed of million billions of neurons which pass information through various synapses and connecting nodes. Computer scientists wanted to develop structures similar to these neurons and hence first developed a 1.0 version of a neuron called ```perceptron```, and this was way back in 1950s - 60s.  

// insert image of simeple perceptron

Though not in use in the current AI scene, perceptrons have layed the foundation stone for the deep learning domain and hence its vital to understand there working.  

If you have ever worked with state diagrams or even if you have not, a perceptron is a very easy representation of any linear fuction possible.  

In fact you can use perceptrons to add, subtract or create any kind of logical operator possible.  

// example diagrams of operations

Too put it briefly, perceptron is a linear unit which computes the output based on the inputs and values of their respective weights. Also these inputs are binary in value. If the sum of the result is greater than a set threshold then the perceptro outputs a 1 otherwise 0. As simple as it come!

// equation of perceptron as given on nnbookmicheal nelson lesson one

To give an example of a use-case, consider you plan to purchase a motorbike. So you take into consideration 3 factors:  

 1. Cost
 2. Look
 3. Mileage (okay that's a stretch)

For each of these factors you have a priority level of -2, 3, 1 respectively.

// show calculation for output

Since the output is above 0, which is a assumed threshold, so you purchase the bike.  

But now consider another person who as a different priority for his purchase parity. He/she feels cost and mileage shouldn't matter much but the look is of utmost importance.

So in any case of cost and mileage if the look of a given bike is great, it will be purchased. So this is a different model altogether because of the weights.  

But we also need to consider that many times the decisions taking by human intelligence are not as linear as the case above. Therefore it might help to stack more perceptrons together to have a more complex decision-making logic.

// example of 2 layers of perceptron like in lesson 1 of micheal nelsons book

As in the above diagram, the perceptrons in the first layer are responsible for very basic decision-making based on just the inputs. But the second layer of perceptrons use the decisions made by the first layer to compute a more complex decision logic!  

This is how the most basic neural networks work and how increasing complexity can be achieved by layering more such perceptrons.

### Enough of perceptrons, what are neural networks?

Okay!  
As you have seen above the core working of any number of layers of perceptrons stacked together is based on a linear weighted sum of the inputs and subsequent results( also called ``` activations```).   

However as the number of input parameters and their effect on the output becomes more complex, these perceptrons just fall prey to the drawbacks of linearity.  

<b> Explaination <b/>  
We want to develop a learning method which predicts correct output based on inputs with robustness. By robustness I mean, simple or very small changes in inputs shouldn't significantly change our outputs.  

Due to the presence of thresholds in perceptrons, our outputs may significantly changed even due to some minor deflection in our input values. AND THIS IS NOT WHAT WE WANT!  

In short, for mapping certain kinds of output based on the value on inputs we require to have some non-linearity in our learning methods.  

### Enter ```sigmoid``` function!

// diagram of sigmoid

// equation of sigmoid

This above equation is so robust to minor changes in inputs that it adds to the robustness of our learning model while introducing the much needed non-linearity.  

Now that we through the basics of the concepts of perceptrons and the need for sigmoid activation, lets jump into the neural networks as used in present day world.  
> Coming soon!
