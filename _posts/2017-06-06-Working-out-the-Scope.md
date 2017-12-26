---
layout: post
title: Scope of ML toolbox
published: true
---

![](/images/toolbox_atoms.JPG)	

Hello guys,

For the last 5 days I have tried and worked with available machine learning toolboxes on SCILAB's Atom portal. Many of them are a direct port of similar libraries/toolboxes in Matlab, while other are original from start.
			One of the major shortcoming of scilab toolboxes is that they are built on a specific version of Scilab (eg. 5.4, 5.5, 6) installation.

The neural network module was of particular interest to me, since if extended and improved further it can be used for deep learning. Below is a brief report.
            
### Report On Neural Network Module:

## Good:
1. Most activation functions are included (hardlimit, sigmoid, tangent-sigmoid, linear)
2. Functions available to create nn in a step-wise manner, which can easily be followed always

load data--> select/set input and target  --> select model --> train using ann_FFBP_gd, ann_FFBP_gdx --> predict for test set using ann_ADALINE_predict, etc

3. End to end functions pre-written for neural network design
4. gui for visualizing training process is intuitive, and gives user idea about change in cost with epochs


## Improvements possible:
1. Documentation about entire process of neural network design, for beginners can be included
2. More engineering problems can be solved using this module, and presented to users as a quick start guide
3. Few deep learning algorithms like cnn and rnn can also be included


### PIMS

Apart from testing these modules, I am trying to working with PIMS - Python Interaction Mechanism in Scilab. This is a very interesting toolbox, which can be used to manipulate python objects and use methods from famous python libraries through the SCILAB interface. 

![](/images/pims.png)

After all most of the ml libraries have been developed for python over the years, it becomes useful to be able to access them in SCILAB without any loss of functionality or features.

But PIMS is still in the early stages of development and many issues need to be fixed. So I will be helping out in creating test cases and reporting bugs encountered while working with scikit-learn through PIMS.

Finally, the current agenda of the toolbox is to start developing a predefined list of machine learning algorthms through Scilab while working on PIMS on the side.

>Lets see where the quest takes us!


