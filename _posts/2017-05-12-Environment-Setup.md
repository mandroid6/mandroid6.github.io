---
layout: post
title: Setup Python Environment for ml and Deep Learning
comments: true
published: true
---
![](/images/anaconda.png)

>This page gives quick and easy steps to setup your machine for machine learning and deep learning.

Hi guys,
In python there are many pre built libraries which can be used for machine learning and deep learning. But one major problem lies in setting up the environment for development using these libraries (especially for Windows based machines).

Since most of these libraries were built to be used on Linux (Ubuntu etc), its easier to setup the working environment in Linux. At the same time its a very confusing and lengthy procedure on Windows machine.

So below are the steps to get you up and running for ml and deep learning development on Windows:

### Step 1: Download Anaconda Distribution 
For your version of system 32bit or 64bit from [here](https://www.continuum.io/downloads)
Its better to select the version for Python 3.6 or 3.5.x since Tensorflow is yet only available for Python 3.5.

![](/images/setup_1.JPG)

### Step 2: Install Anaconda
Follow through the on-screen instructions Next->Next->Next-> then :
- check the box to add python to environment variables path. 
- also make Anaconda as the default python checkbox to maintain uniformity.
   
![](/images/setup_2.JPG)

### Step 3: Open up Anaconda Navigator on your machine
The following packges will be preinstalled in the Navigator:
- Spyder (IDE of choice)
- Jupyter Notebook (for interactive programming)
- Qt console ( for inline figures and graphics)

![](/images/setup_3.JPG)

### Step 4: Now go to the Environments tab 
on the left side of the Navigator
- Here click on **Create** new environment button, and 
- type in the Environment name you want (say environment)
- Check only the Python check box ( uncheck R)
- In the Python version tab select Python 3.5, since Tensorflow currently only  works for 3.5

![](/images/setup_4.JPG)

Once your new environment for Python 3.5 has been created it would appear like this

![](/images/setup_5.JPG)

Now from the search packages box, type-in and download the following packages:
1. Jupyter
2. Scikit-learn
3. qtconsole
4. matplotlib
5. numpy
6. pandas
7. pip
8. scipy

### Step 5: 
Once all above packages are installed, open up a terminal from your newly created Environment.

![](/images/setup_6.JPG)

Once the terminal opens up type in the following for installing Theano:
{% highlight js %}
conda install theano pygpu
{% endhighlight %}

Let the download and installtion finish. After this type in the following for insatlling Tensorflow:

For CPU
{% highlight js %}
pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/windows/cpu/tensorflow-1.1.0-cp35-cp35m-win_amd64.whl
{% endhighlight %}

For GPU
{% highlight js %}
pip install --ignore-installed --upgrade https://storage.googleapis.com/tensorflow/windows/gpu/tensorflow_gpu-1.1.0-cp35-cp35m-win_amd64.whl
{% endhighlight %}

Once tensorflow has been successfully installed, type the following for installing Keras:
{% highlight js %}
pip install git+git://github.com/fchollet/keras.git
{% endhighlight %}

Once everything has been installed,go to next Step. If not search for your specific error on Google, you will find numerous discussions and answers on StackOverflow. Otherwise ping me.

### Step 6: Testing 
Now to test whether scikit-learn, Theano , Tensorflow and Keras are working properly; open up a terminal  just like the previous step but with python

![](/images/setup_7.JPG)

Once the terminal opens up, it should appear like this. 

![](/images/setup_8.JPG)

Now type the following commands to test their working
{% highlight js %}

import tensorflow as tf                                                                                            
import theano
import keras

{% endhighlight %}
 
 
If there are no errors, then Congratulations you have successfully setup your Environment for machine learning and deep learning.

If some errors pops up, copy the error content as search for solution on Google and stack overflow. This will only help you later in fixing other such minor issue.


>Otherwise ping me :D
