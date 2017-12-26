---
layout: post
title: GSOC - Issues with PIMS for ML
published: true
---

![](/images/GSoC_Logo.jpg)


Hey guys,

As you already know, one of my major task in completing the GSOC project is evaluation of existing libraries and toolboxes which can be utilized for porting scikit-learn or any other ml library for Scilab.

Last week I had started working with PIMS - Python integration module in scilab. But there are several issues which I faced while trying to run [Comparison of kernel ridge regression and SVR](http://scikit-learn.org/stable/auto_examples/plot_kernel_ridge_regression.html#sphx-glr-auto-examples-plot-kernel-ridge-regression-py) using PIMS.

As discussed with my project mentors, it was required of me to submit a detailed report pointing out the specifics where PIMS could be improved, so as to accomodate scikit-learn implementations through it.

## Issues in using PIMS for scikit-learn

### 1. Importing libraries

When importing python libraries such as numpy or scikit-learn, use of pyImport is justified. But once a library has been imported every time the entire path/structure of the library needs to be specified to reach a particular module.

Eg. 

python -- >> ```import matplotlib.pyplot```

PIMS   -- >> ```pyImport matplotlib.pyplot```
    
``` 
!--error 999
pyImport: An error occured: Cannot load the module matplotlib.pyplot
Python interpreter threw an exception:
Traceback:
  File C:\Python27\lib\site-packages\matplotlib\pyplot.py, line 115, in <module>
  File C:\Python27\lib\site-packages\matplotlib\backends\__init__.py, line 32, in pylab_setup
  File C:\Python27\lib\site-packages\matplotlib\backends\backend_tkagg.py, line 6, in <module>
  File C:\Python27\lib\site-packages\six.py, line 203, in load_module
  File C:\Python27\lib\site-packages\six.py, line 115, in _resolve
  File C:\Python27\lib\site-packages\six.py, line 82, in _import_module
  File C:\Python27\Lib\lib-tk\Tkinter.py, line 38, in <module>
  File C:\Python27\Lib\lib-tk\FixTk.py, line 65, in <module>
exceptions.ImportError: DLL load failed: The specified module could not be found.
 ```
 
One possibility is that matplotlib has a different structure in terms of  calling modules, but lets user access them through standard python import syntax import library.module_name
Or that the user needs to specify the entire path to reach the actual module through PIMS.
 
Need to specify full name of library, if not named as a separate object. 

**Eg.**
```
pyImport numpy;
numpy.array([1 2 3 4 5 5]);
``` 
**Alternative:**
```
pyImport numpy;
np = numpy;
np.array([1 2 3 4 5 5]);
```

### 2. Calling functions from libraries

Once a library has been imported, methods cannot be imported for direct usage using standard python syntax
```
method_name(parameters)
```

Instead number of steps increased to

```
pyImport library.module_name
xyz = library.module_name;
xyz.method_name(parameters);
```

For every function/method call from an imported library, same syntax needs to be used which is an overhead.

### 3. Python object created in SCILAB using PIMS cannot be visualized

Any python object is created using PIMS it is visible in the variable explorer but only as a Mlist type, which cannot be visualized by the user for inspection.

When solving any machine learning problem, visualization of datasets once pre-processed, or for data-manipulation/editing is very necessary. But this is currently not possible with using PIMS.

### 4. Help documentation or python library methods

Only if a user has access to working internet and the library documentation (eg scikit-learn), he/she can work with PIMS in Scilab, since currently the user is expected to know all required parameters and contexts in which a method can be used.

Furthermore on using ```pyGetMethods(library_name)``` in Scilab we don’t always get a list of all available methods in the library, just a list of those which are available immediately inside the first level in which library is organized.

**Eg.** 
```
pyImport sklearn
pyGetMethods(sklearn)

Output :
!clone         !
!              !
!setup_module  !
```

If ```train_test_split``` method needs to be called, we need to specify as below
``` 
xyz = sklearn.setup_module.cross_validation.train_test_split(parameters_required)
```
which is a rather long way to call a method.

### 5. Using builtin functions 

like append and ravel on an expression using ```expression.method_name()```
Since when using python in scilab, we are importing the builtin module as py, it is required to pass the expression by prefixing py to every builtin function as ```py.ravel(expression)```.
 
Usage of ```[ ]``` for specifying list of values to be taken or for declaring dictionaries, invokes error since Scilab also uses ```[ ]``` for creating and manipulating matrices. 

**Eg.**
```
svr = ms.GridSearchCV(svm.SVR(kernel='rbf', gamma=0.1),cv=5,param_grid={"C": [1e0, 1e1, 1e2, 1e3], "gamma": np.logspace(-2, 2, 5)});

!--error 43
Not implemented in scilab...
at line   7 of function %c_b_s called by :  
, cv=5,param_grid={"C":[1e0, 1e1, 1e2, 1e3], "gamma": np.logspace(-2, 2, 5)})
at line      30 of exec file called by :    
exec('F:\Internship\SCILAB ML\scikit-learn scilab\kernel_ridge_svr.sce', -1)
```

.

.

.

Consequently even though PIMS is perfectly suitable and working for normal/basic python usage in SCILAB, there seems to be few areas still needed to be covered before machine learning can be wholly utilized in SCILAB.


Lets see where the next exchange with Scilab Developers takes this project (internally I am hoping to write direct Scilab code for predefined set of ml algorithms through macros).

>Still lets see :D