---
layout: post
title: Essential Machine learning Libraries - I
comments: true
published: true
---
![](/images/scipy_post.JPG)

> This post is part 1 of the Essential Machine Learning libraries series

Hello guys,

[Machine](https://mandroid6.github.io/2017/04/03/Machine-Learning-Classification/) [learning](https://mandroid6.github.io/2017/04/15/Machine-Learning-Regression/) has been present since the the 1970s, but only in the last 6 years it has gained pace and popularity amoung developers and scientists alike.

Python being the choice of most developers, its essential to know the major data science and ml/deep learning libraries in python with their purpose and usecase.

This post will encompass only the libraries majorly used for data importing, preprocessing and visualization. The libraries used for ml model creation will be covered in the next post. 

## 1. Numpy 
![](/images/numpy.jpg)

Numpy library adds support for multidimentional arrays and matrices in a manner similar to MATLAB. Along with a large collection of high-level mathematical functions to operate on these arrays.
The core functionality of NumPy is its "ndarray", for n-dimensional array, data structure.

Sample Operations:

Array creation
```python
>>> import numpy as np
>>> x = np.array([1, 2, 3])
>>> x
```
array([1, 2, 3])
```python
>>> y = np.arange(10)  # like Python's range, but returns an array
>>> y
```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

Basic operations
```python
>>> a = np.array([1, 2, 3, 6])
>>> b = np.linspace(0, 2, 4)  # create an array with four equally spaced points starting with 0 and ending with 2.
>>> c = a - b
>>> c
```
array([ 1., 1.33333333, 1.66666667,  4.])
```python
>>> a**2
```
array([ 1, 4, 9, 36])

Universal Functions
```python
>>> a = np.linspace(-np.pi, np.pi, 100) 
>>> b = np.sin(a)
>>> c = np.cos(a)
```

Linear Algebra
```python
>>> from numpy.random import rand
>>> from numpy.linalg import solve, inv
>>> a = np.array([[1, 2, 3], [3, 4, 6.7], [5, 9.0, 5]])
>>> a.transpose()
```
array([[ 1. ,  3. ,  5. ],
       [ 2. ,  4. ,  9. ],
       [ 3. ,  6.7,  5. ]])
```python       
>>> inv(a)
```
array([[-2.27683616,  0.96045198,  0.07909605],
       [ 1.04519774, -0.56497175,  0.1299435 ],
       [ 0.39548023,  0.05649718, -0.11299435]])
```python        
>>> b =  np.array([3, 2, 1])
>>> solve(a, b)  # solve the equation ax = b
```
array([-4.83050847,  2.13559322,  1.18644068])
```python 
>>> c = rand(3, 3) * 20  # create a 3x3 random matrix of values within [0,1] scaled by 20
>>> c
```
array([[  3.98732789,   2.47702609,   4.71167924],
       [  9.24410671,   5.5240412 ,  10.6468792 ],
       [ 10.38136661,   8.44968437,  15.17639591]])
```python        
>>> np.dot(a, c)  # matrix multiplication
```
array([[  53.61964114,   38.8741616 ,   71.53462537],
       [ 118.4935668 ,   86.14012835,  158.40440712],
       [ 155.04043289,  104.3499231 ,  195.26228855]])
```python        
>>> a @ c # Starting with Python 3.5 and NumPy 1.10
```
array([[  53.61964114,   38.8741616 ,   71.53462537],
       [ 118.4935668 ,   86.14012835,  158.40440712],
       [ 155.04043289,  104.3499231 ,  195.26228855]])


For more detailed examples and tutorials follow this [link](http://cs231n.github.io/python-numpy-tutorial/).

## 2. Scipy
![](/images/scipy.jpg)

SciPy is a Python-based ecosystem of open-source software for mathematics, science, and engineering. It has a lot of packages for scientific computing including but not exhaustive - optimization, integration, fast fourier transform, ODE and signal and image processing.  
  
SciPy is organized into subpackages covering different scientific computing domains. These are summarized in the following table:  


| **Subpackage**  |    **Description** |
| --------------- |-------------:| 
|cluster | 	Clustering algorithms|
|constants| 	Physical and mathematical constants|
|fftpack| 	Fast Fourier Transform routines|
|integrate| 	Integration and ordinary differential equation solvers|
|interpolate| 	Interpolation and smoothing splines|
|io| 	Input and Output|
|linalg| 	Linear algebra|
|ndimage| 	N-dimensional image processing|
|odr| 	Orthogonal distance regression|
|optimize| 	Optimization and root-finding routines|
|signal| 	Signal processing|
|sparse| 	Sparse matrices and associated routines|
|spatial| 	Spatial data structures and algorithms|
|special| 	Special functions|
|stats| 	Statistical distributions and functions|


Since there are a lot of examples to be covered under scipy, I will be writing a seperate post after I have tried working with most of them. Till then you can check out the following [link](https://docs.scipy.org/doc/scipy/reference/tutorial/index.html) 

   
## 3. Matplotlib  
![](/images/matplotlib.png)  

Matplotlib is a Python plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms. Matplotlib can be used in Python scripts, the Python and IPython shell, the jupyter notebook, web application servers, and four graphical user interface toolkits.

It provides an object-oriented API for embedding plots into applications using general-purpose GUI toolkits like Tkinter, wxPython, Qt, or GTK+. There is also a procedural "pylab" interface based on a state machine (like OpenGL), designed to closely resemble that of MATLAB.  

Line Plot
```python
>>> import matplotlib.pyplot as plt
>>> import numpy as np
>>> a = np.linspace(0,10,100)
>>> b = np.exp(-a)
>>> plt.plot(a,b)
>>> plt.show()
```
![](/images/line_plot.png)

Histogram
```python
>>> import matplotlib.pyplot as plt
>>> from numpy.random import normal,rand
>>> x = normal(size=200)
>>> plt.hist(x,bins=30)
>>> plt.show()
```
![](/images/hist_plot.png)

Scatter Plot
```python
>>> import matplotlib.pyplot as plt
>>> from numpy.random import rand
>>> a = rand(100)
>>> b = rand(100)
>>> plt.scatter(a,b)
>>> plt.show()
```
![](/images/scatter_plot.png)

For more detailed examples and tutorials follow this [link](https://matplotlib.org/users/pyplot_tutorial.html).


## 4. Pandas
![](/images/pandas.png)

Pandas is a software library written for the Python programming language for data manipulation and analysis. In particular, it offers data structures and operations for manipulating numerical tables and time series.  
  

Few of the important features of pandas are :
- DataFrame object for data manipulation with integrated indexing.  
- Tools for reading and writing data between in-memory data structures and different file formats.  
- Data alignment and integrated handling of missing data.  
- Reshaping and pivoting of data sets.  
- Label-based slicing, fancy indexing,and subsetting of large data sets.  
- Data structure column insertion and deletion.  
- Group by engine allowing split-apply-combine operations on data sets.  
- Data set merging and joining.

Some sample examples:  
  
Creating data  
```python
>>> from pandas import DataFrame, read_csv
>>> import pandas as pd
>>> from numpy.random import rand
>>> names = ['Bob','Jessica','Mary','John','Mel']
>>> births = [968, 155, 77, 578, 973]
```

  
Merging 2 lists using zip function  
```python
>>> BabyDataSet = list(zip(names,births))
>>> BabyDataSet
```
[('Bob', 968), ('Jessica', 155), ('Mary', 77), ('John', 578), ('Mel', 973)]

Creating dataframe object for storing data in a manner similar to sql
```python
>>> df = pd.DataFrame(data = BabyDataSet, columns=['Names', 'Births'])
```

Importing and dividing dataset
```python
>>> dataset = pd.read_csv('Dataset_name.csv')  #modified as per need
>>> X = dataset.iloc[index of input values].values
>>> y = dataset.iloc[index of target/ouput values].values
```

For more detailed examples and tutorials follow this [link](https://pandas.pydata.org/pandas-docs/stable/10min.html). Also [this](https://www.datacamp.com/community/tutorials/pandas-tutorial-dataframe-python#gs.cfJ29OY) is a great article for a quick walkthrough.  



Till now we have covered major python libraries required for importing and preprocessing data before actual machine learning model creation. 

>In the next post I will be covering ml and deep learning libraries essential for creating, training and testing various models. So stay tuned!

