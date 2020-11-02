import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components';
//import { Link } from 'react-router-dom';


import teaser from "../../img/teaser.png";
import cropped from "../../img/32x32.png";
import digitLengthDist from "../../img/digitLengthDist.png";
import individualDist from "../../img/individualDigitDist.png";
import gray from "../../img/gray.png";
import conv from "../../img/conv.png";
import pool from "../../img/max-pooling.png";
import fc from "../../img/fully-connected.png";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'20px'
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
    boxFormat: {
        width: '70%',
        //paddingBottom:'20px',
    },
    titleFormat: {
        paddingBottom:'10px',
        textDecoration: "none",
        color:'#212F3C',
        //fontFamily: '-apple-system',
    },
    lateTitleFormat: {
        paddingTop: '20px',
        paddingBottom:'10px',
        textDecoration: "none",
        color:'#212F3C',
        //fontFamily: '-apple-system',
    },
    titleParagraphFormat: {
        fontFamily: '-apple-system',
    },
    titleParagraphFormat2: {
        fontFamily: '-apple-system',
        padding:'10px',
    },
    imageFormat: {
        //paddingBottom:'10px',
    },
}));

const MidtermUpdate = ({ tagChange }) => {
    const classes = useStyles();
    //const theme = useTheme();



    return (
        <div className={classes.wrapper}>
            <Header></Header>
            <Box className={classes.boxFormat}>


                <Typography align = 'center' variant = 'h4' className={classes.titleFormat}>
                    Abstract
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat}>
                The goal of our project is to train a convolutional neural network to detect the digits of a house number displayed on the streets. This is a basic image recognition that can be useful in many different fields.
                For the first update, we were able to preprocess all the images and begin setting up the different layers of our neural network.<br></br>
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={teaser} alt="..."></img>
            <Box className={classes.boxFormat}>
                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Introduction
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                As shown in the image above, our project targets images of house number displayed on the streets, we hope to achieve reasonable results given a variety of resolution of the images. Digit recognition, is becoming increasingly 
                important in various domains as technology advances. Whether it is a mapping company needing to match images of house numbers to their geolocations, or a robot trying to locate itself through room numbers/house numbers, SVHN serves as a good
                basic dataset to dive into the world of image recognition. We wanted to implement our project from scratch to understand how to preprocess the dataset as well as gain a deeper understanding of how to set up and train our own neural network.
                </Typography>

                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Approach
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                The first step was to preprocess the data from <a href="http://ufldl.stanford.edu/housenumbers/">The Street View House Numbers (SVHN) Dataset</a>. We first focused on the first part of the dataset, 
                where colored house-number images are given where the bounding box for each digit is given in a .mat file. 
                The general steps we took to preprocess the image dataset was to: limit the maximum number of digit to 5 (there is one image that has 6 digits in the picture), make a new bounding box given the min and max
                values of the x and y values for all bounding boxes of all digits, expand the bounding box in each direction by 30% to ensure coverage of all digit details, then convert the image to grayscale. These preprocessing techniques
                are written with concepts we learned from class as we are first finding the bounding boxes then converting each cropped image to grayscale. After preprocessing all the images
                of the dataset, we began researching into how convolutional neural network are structured and how to set up each layer for our projects. Implementing and understanding the neural network has been the biggest obstacle so far as it is all of our group members' first time working with neural networks.
                We researched through various research papers and tutorials and have set up the network conceptually but are still in progress of coding the network.<br></br>
                </Typography>


                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Experimental and Qualitative Results 
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                We are working with the first section of the SVHN dataset, where we have 248,823 images with their respective digit bounding boxes and labels. As described in our approach, we began by preprocessing the .mat file similar to PS4,
                loading out the bounding box information as well as the labels for the digits in each image. We stored these data as a pandas dataframe for the ease of access.  The dataframe contained the filename, four extremes of the bounding boxes, labels of the digits,
                number of digits, the 30% increase value, as well as the original image dimensions. We then resized each individual image to 32x32 pixels as inputs to our neural network. Shown below are the outputs after cropping and resizing. <br></br>
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={cropped} alt="..."></img>
            <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                After ensuring that we have successfully cropped, resized, and labeled our images, we decided to create a set of 6000 images as the validation set that can represent our dataset.
                The validation set is used to evalute the given model, it will provide an unbiased evaluation of a model fit on the training dataset while tuning the hyperparameters. We take 4000 samples 
                from training set and 2000 samples from the extra set. We plotted the digit length distribution and individual digit distribution to ensure that the validation set is a reasonable representation 
                of our samples. We then combined all the images that are not a part of the validation set from training and extra into the final training set as the input to our neural network. The testing set is left
                as it is.<br></br>
                </Typography>
            </Box>
            <Typography>
                Digit Length Distribution
            </Typography>
            <img className={classes.imageFormat} src={digitLengthDist} alt="..."></img>

            <Typography>
                Idividual Digit Distribution
            </Typography>
            <img className={classes.imageFormat} src={individualDist} alt="..."></img>

            <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                Shown below is an example of 25 images after the grayscale as well as the mean subtraction processing. 
                These are the images that will be the input to the neural network.<br></br>
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={gray} alt="..."></img>

            <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                After the preprocessing, we will be trying to implement the neural network as the next step. First, we had to research more about 
                neural networks as none of us have worked with one before. We decided that we will be implementing a 9 layer convolutional neural netwrok with the following 
                architecture: <br></br>
                </Typography>
                <Typography align='center' variant='subtitle2' className={classes.titleParagraphFormat2}>
                INPUT -{'>'} [[CONV -{'>'} RELU]*2 -{'>'} POOL]*2 -{'>'} [[CONV -{'>'} RELU]*3 -{'>'} POOL] -{'>'} [FC -{'>'} RELU]*2 -{'>'} OUTPUT<br></br>
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                CONV represents a convolution layer, which uses filters to perform convolution operations with filter size F and stride S to produce the feature map.
                For our convolution layer, we are using a 5x5 filter as it provides a measurer for rhow close a patch of input resembles a feature, the weights in the filter
                matrix are derived while training the data. We will use Rectified Linear Unit (RELU) as our activation function, it aims at introducing non-linearities to the network. As our input data is of size 32x32, with 1-5 digits within one input, a small filter of size 5x5 would be
                more appropriate to collect representative information. The number of channels will be 1 as it should be equal to the number of color channels for the input, and 
                our images are in gray-scale. The first 7 layers of the network are CONV-RELU layers and POOL layers. The number of filters for the first two layers are of 32, next three layers are of 64, and the next two are of 128.
                We increase the number as to increase the depth of the feature space, such that we can learn more levels of global abstract features. We set padding = same as the borders
                of the image is important and we also want to perform more convolutions without shrinking size. <br></br>
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={conv} alt="..."></img>
            <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                POOL represents a pooling layer, which is a downsampling operation to perform spatial invariance. We will be using max-pooling layers to down-sample the 
                input representation and reduce the input's dimensionality while keeling its max values (activated features).<br></br>
                </Typography>
            </Box>

            <img className={classes.imageFormat} src={pool} alt="..."></img>
            <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                FC represents a fully connected layer, which operatres on a flattened
                input where each input is connected to all neurons. The FC layer is at the end of the architecture and is used to optimize certain objectives. <br></br>
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={fc} alt="..."></img>

            <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                We are currently still in the process of setting up our neural network based on the plan above. We will be using a loss function by taking the 
                average loss of every individual example for each of the 5 possible digits and sum them. This will be the cost function that we will be trying to minimize.
                We will likely be using Adam as the optimizer but futher research needs to be done. We plan to evaluate the performance of our neural network by calculating the 
                average accuracy across all samples.<br></br>
                </Typography>

                <Typography align = 'center' variant = 'h4' className={classes.titleFormat}>
                    Conclusion and Future Work
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                We are still at the most important part of the project, and the results have not been presented as our neural network is not fully set up so we have not trained our dataset.
                This will be the next step to our project, after training our neural network, we will be using the optimization algorithm mentioned above and then evaluate the performance for the 
                final update. We will also continue to look into other potential preprocessing techniques other than mean-subtraction. At the midterm point, we find ourselves slightly behind where we wanted
                to be due to the complexity of neural network. But we believe we understand how to set up each layer and tune the hyperparameters and we will soon be training our network. More details on
                performance will be included in the final update.<br></br>
                </Typography>
            </Box>

            
        </div>
    )
}

export default MidtermUpdate;