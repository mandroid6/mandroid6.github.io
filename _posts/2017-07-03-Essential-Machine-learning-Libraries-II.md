---
layout: post
title: Essential Machine learning Libraries - II
published: true
---
![](/images/sklearn.png)

Hello guys,

As promised earlier this post will cover machine learning libraries used for creating models and training them.
I will be covering scikit-learn, tensorflow and keras in detail - guiding you through some basic model creation and getting you prepared for making any other model easily.

First of all you need to setup python environment for getting started with this tutorial, so follow [these](https://mandroid6.github.io/Environment-Setup/) steps.

All the below given steps assume that you have already imported the dataset using pandas library.
To limit the amount of content in a single post, I have decided to breakdown the Essential Machine Learning Libraries series into part II, III and IV. Such a subdivision will ensure easy to absorb content and less cofusion.

>Lets not wait any longer, and directly jump into the actual learning. 

Here ```X``` refers to input parameters, and ```y``` refer to the target or output values.

#  Scikit-learn  

## 1. Importing the library and dataset  


```python
from sklearn.cross_validation import train_test_split
import pandas as pd

dataset = pd.read_csv('Dataset.csv')  #modified as per need
X = dataset.iloc[:,input_indexes].values
y = dataset.iloc[:,label_indexes].values
```
 
## 2.  Preprocessing the data  

So the first step in solving any machine learning problem is to **divide the dataset into training and test set**.  
```python
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)
```  

### Feature Scaling  

If the values of the input parameters varies alot, then it is useful to **scale them on a common range**. Doing so speeds up and improves the training process. Many ml modelswhen created automatically do feature scaling without explicitly being told, but its essential to know how to do it. Any one of the below mentioned 3 methods can be used:  

1. **Standard Scaler**  

```python  
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler().fit(X_train)
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```
2. **Normalization of the dataset**  
```python
from sklearn.preprocessing import Normalizer
scaler = Normalizer().fit(X_train)
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

3. **Binarization of the dataset**  
```python
from sklearn.preprocessing import Binarizer
binarizer = Binarizer(threshold = 0.0).fit(X)
binary_X = binarizer.transform(X)
```


### Encoding categorical features

When you have an input parameter having categories like country etc, or any other alphabetical features, its required to do encoding. 
```python
from sklearn.preprocessing import LabelEncoder
encoder = LabelEncoder()
y = encoder.fit_transform(y)
```


### Imputing missing Values

Sometimes few values in the feature or output label column are missing. But we cannot simply eliminate that feature, instead we can use some strategy to have an approximate value in place of the missing value to fill the dataset. Eg mean, median
```python 
from sklearn.preprocessing import Imputer
imput = Imputer(missing_values =0, strategy = 'mean', axis = 0)
imput.fit_transform(X_train)
```


### Generation of Polnomial Features

It can often happen, that you have very few features for traing you machine learning model, but you require a generalized model, which doesn't overfit the training set. So instead of looking for new features to include in your dataset, you create polynomial features of any order suitbale, using existing features. This ensures your model is more robust to overfitting and can also possibly improve its accuracy. 
```python
from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(5)
poly.fit_transform(X)
```


## 3. Model creation

In this step an appropriate machine learning model is created as per need. It is important to understand that, not all models are suitabe to solve all variety of ml or dl problems.

Understanding which model should be used, requires a basic knowledge of their working. I suggest you have a quick run through [this](https://www.analyticsvidhya.com/blog/2015/08/common-machine-learning-algorithms/) article first.

### Supervised Learning Models
1. **Linear Regression**
```python
from sklearn.linear_model import LinearRegression
lr = LinearRegression(normalize = True)
```

2. **Naive Bayes**
```python
from sklearn.naive_bayes import GaussianNB
gnb = GaussianNB()
```

3. **Support Vector Machines (SVM)**
```python
from sklearn.svm import SVC
svc = SVC(kernel = 'linear')
```

4. **K- Nearest neighbors (KNN)**
```python
from sklearn import neighbors
knn = neighbors.KNeighborsClassifier(n_neighbors = 5)
```


### Unsupervised Learning Models
5. **Principal Component Analysis (PCA)**
```python
from sklearn.decomposition import PCA
pca = PCA(n_components = 0.95)
```

6. **K Means**
```python
from sklearn.cluster import KMeans
k_means = KMeans(n_clusters = 3, random_state = 0)
```


## 4. Fitting the model to training data

Irrespective of the learning model used, below mentioned method is valid for all. 

**Supervised Learning** 

requires input parameters as well as target labels/values
```python
lr.fit(X, y)
knn.fit(X_train, y_train)
svc.fit(X_train, y_train)
```
**Unsupervised models** 

on the other hand only require inputs, as the name suggests.
```python
k_means.fit(X_train)
pca_model = pca.fit_transform(X_train)
```

## 5. Predicting test-set results

**Supervised Learning**
```python
y_pred = lr.predict(X_test)
y_pred = svc.predict(X_test)
y_pred = knn.predict_proba(X_test)
```

**Unsupervised Learning**
```python
y_pred = k_means.predict(X_test)
```

## 6. Evaluating your model's performance

Once you have predicted the test set results, one important step still remaining is evaluation of the accuracy of your model. Also accuracy alone cannot gurantee that your model is more close to the target results. For this there are various scores and indexes which justify your model's performance.

For any kind of model, it is useful to first simply compare the ```y_pred``` and ```y_test``` set values, to get a rough idea. Here ```y_test``` is the actual target too be achieved by the model.
But once the number of examples being considered is large (>>100), it beyond human effort for manual comparison, hence these metrics jump in.
These evaluation metrics vary in terms of the type of ml problem being considered.

### Regression Metrics
1. **Mean Absoulte Error**
```python
from sklearn.metrics import mean_absoulte_error
mean_absolute_error(y_test, y_pred)
```
2. **Mean Sqaured Error**
```python
from sklearn.metrics import mean_sqaured_error
mean_squared_error(y_test, y_pred)
```
3. **R squared Score**
```python
from sklearn.metrics import r2_score
r2_score(y_true, y_pred)
```

### Classification Metrics
1. **Accuracy**
```python
from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_test, y_pred)
```
2. **Classification Report**
```python
from sklearn.metrics import classification_report
cr = classification_report(y_test, y_pred)
```
3. **Confusion Matrix**
```python
from sklearn.metrics confusion_matrix
cm = confusion_matrix(y_test, y_pred)
```

### Clustering Metrics
1. **Adjusted Rand Index**
```python
from sklearn.metrics import adjusted_rand_score
rand_score = adjusted_rand_score(y_test, y_pred)
```
2. **Homogeneity**
```python
from sklearn.metrics import homogeneity_score
hs = homogeneity_score(y_test, y_pred)
```
3. **V-measure**
```python
from sklearn.metrics v_measure_score
v_measure = v_measure_score(y_test, y_pred)
```

### Cross-Validation
```python
from sklearn.cross_validation import cross_val_score 
cross_val_knn = cross_val_score(knn, X_train, y_train, cv = 4)
cross_val_lr = cross_val_score(lr, X, y, cv = 2)
```

## 7. Fine-tuning your trained model

One might think that, once a ml model had been created, trained and tested , the job is done. Well it's not so easy making state of art models, without first fine tuning them.
Fine-tuning simply means, mdoifying the model properties to make it more and more robust with each epoch of testing and training by selecting the best set of model parameters values.

It may be considered to be a meta-heuristic procedure, which may or may not result in the global optimum/ best solution.

**Grid Search**
```python
from sklearn.grid_search import GridSearchCV 
parameters = {"n_eighbors": np.arange(1,3), "metric"" ["euclidean", "cityblock"]}
grid = GridSearchCV(estimator=knn, param_grid = parameters)
grid.fit(X_train,y_train)
print(grid.best_score_)
print(grid.best_estimator_.n_neighbors)
```
So based on the value of ```n_neighbors``` giving the ```best_score_```, our knn model can be fine-tuned to give better results.

**Randomized Parameter Optimization**
```python
from sklearn.grid_search import RandomizedSearchCV 
parameters = {"n_eighbors": range(1,5), "weights", ["uniform", "distance"]}
rsearch = RandomizedSearchCV(estimator = knn, param_distributions = parameters, cv = 4, n_iter = 8, random_state = 5)
rsearch.fit(X_train, y_train)
print(rsearch.best_score_)
```

If you want to know more about the scikit-learn library implementation please follow the [official documentation](http://scikit-learn.org/stable/tutorial/index.html)
More info about the evaluation metrics can be found [here](http://machinelearningmastery.com/metrics-evaluate-machine-learning-algorithms-python/), if needed.


So here, we come to the end of post-II of the Essential Machine Learning Libraries series. Scikit-learn has been one of the most widely used ml library by researchers and developers alike, and congrats to you for joining a new league!


>In the upcoming Part-III, I will be covering Tensorflow library - basics, model creation and testing. So stay tuned!
