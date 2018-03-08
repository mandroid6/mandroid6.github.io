---
layout: post
title: PixelRNN-CNN Summary
published: true
---

>What if you could complete an entire image pixel by pixel, by just supplying a single pixel?

For modelling the distribution of natural images we require an image model which is expressive, tractable and scalable all at once.

This paper tries to present a dnn which sequentially predicts the pixels in an image along the two spatial dimensions.
Instead of considering the pixel intensities as a continuous distribution, this method models the discrete probability of raw pixels and encodes all the dependencies in the image. This is done by using a multinomial distribution with a vanilla soft-max layer.

### Novelties: fast 2-D RNN and effective use of residual connections
Achieve log-likelihood on naturals images, considerably higher than the previous state of art.
Samples generated appear to be crisp, varied and globally coherent.


## Introduction:
Generative image modelling is central problem in unsupervised learning, and has the advantage that there is practically endless amount of image data available. Since images are high dimensional and highly structured, estimating distribution of natural images is very challenging.

One of the roadblocks in generative image modelling is building complex ad expressive models that are tractable and scalable.
Stochastic latent variable models like '''VAE''', which aim to infer meaningful representations but often come with an intractable inference step that hinder performance.

Casting the image as a product of conditional distributions is an effective approach to tractably model a joint distribution of pixels in an image. (NADE, fully visible neural networks)

Such factorizations convert the joint distribution problem into a seq problem, where we can learn to predict the next pixel given all previous pixels. For a highly nonlinear and long-range correlations between pixels and the complex conditional distributions that results requires a highly expressive seq model.

RNN offer a compact and shared parametrization of a series of conditional distributions. They have been used from hard problems like handwriting generation, to character prediction and even for machine translation problems.

This paper aims to develop a 2D RNN model which can be used for large-scale modeling of natural images. 

PixelRNN composed of up to 12, fast 2D LSTM layers, which use LSTM units in their state, and then apply convolution for computing at once all the states along one spatial dimension.
2 types of LSTM layers:
1. Row LSTM - convolution applied along each row
2. Diagonal BiLSTM - convolution applied along diagonal of images

Residual connections around the LSTM layers help with training PixelRNN for up to 12 layers of depth.

A second much simplified architecture uses a convolutional neural network, which can also be used as a sequence model with a fixed dependency range through use of masked convolutions.

PixelCNN is fully convolutional network of 15 layers which maintain all the spatial resolution of its input throughout the layers. It outputs the conditional distribution at each location.

PixelRNN and PixelCNN capture full generality of pixel inter-dependencies without introducing independence assumptions (like latent variable models)
Dependencies across RGB channels are also maintained within each pixel. Also the discrete distribution gives both representational and training advantages for out models.

This paper tries to explain the design of two types of PixelRNNs corresponding to the two types of LSTM layers; also describes the purely convolutional PixelCNN that is the fastest architecture; and design for Multi-Scale version of the PixelRNN.

## MODEL:
Scans the image one row and one pixel at a time, for which it predicts the conditional distribution over the possible pixel values from the scanned context.
Joint distribution of image pixels in factorized as a product of conditional distributions. Parameters used in predictions are shared across all pixel positions in the image.

Theis & Bethge propose to use a 2-d LSTM network that starts at top left pixel and proceeds towards the bottom right pixel, for the image generation process.

Long-range dependencies can be effectively handled by LSTM network, which are the crux of scene and object understanding/detection.

2D - left/right and top/bottom

## GENERATING AN IMAGE PIXEL BY PIXEL

> To be continued
