---
layout: post
title: Learning Phase 1
published: true
---
![_config.yml]({{ site.baseurl }}/images/skflow.jpg)

>This page is a quick recap of all the machine learning steps and libraries I looked into before the official coding period.

Hi guys,

So the month long community bonding period has come to an end, after discussions on the final project goals and the approach needed to be followed by me before first evaluation.

Machine learning libraries have already been setup in most other programming languages like C++, java , MATLAB and most importantly python. R is also increasing being used for machine learning and data analytics, but I won't be focusing on its libraries.

Since May 4 I have been trying to tinker with [scikit-learn][2] and [tensorflow][3], to get a clear understanding of their structure and methods of implementation. Scikit-learn being available since many years, has better tutorials available and is much easier to use. 

Google backed Tensorflow being new, still surpases other libraries in terms of speed and memory usage. Increaingly more developers are adopting tensorflow, because of its structure based on graphs. Placeholders in tf is yet another novelty which lets you create you operational graph, without actually giving any input variables at first.

So in these 25 days, I have learned the following 

### 1. Understanding and working with essential libraries
- numerical computaiton:  numpy, matplotlib and pandas
- machine learning	 : scikit-learn, tensorflow and keras

### 2. Data preprocessing
This includes everything 
- importing the dataset
- splitting it into training and test test
- feature scaling (if required)
- handling categorical data (using onehotencoding)

### 3. Creating and fitting appropriate machine learning model 
to the training set

### 4. Predicting results on the test set
for measuring accuracy of model , and also using the confusion matrix method

### 5. Visualizing the prediction results 
if possible, for better understanding of its working

### 6. Finally I applied all the above learned skills on the Titanic Dataset on [Kaggle.com][1] and made my first submission :D

 ![]({{site.baseurl}}/images/kaggle.jpg)


>In upcoming posts, I will be explaining in detail each and every step mentioned above for solving any generalized machine learning problem.

Be ready to see more tutorials ahead, as I will keep sharing whatever I learn and discover.

So cheers to learning more about ml and happy summers to you!!

[1]: https://www.kaggle.com/
[2]: scikit-learn.org/
[3]: https://www.tensorflow.org/
