import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Header } from '../../components';
//import { Link } from 'react-router-dom';


import teaser from "../../img/teaser.png";
import oneHot from "../../img/oneHot.png";
import softmax from "../../img/softmax.png";
import model from "../../img/model.png";
import train from "../../img/train.png";
import epoch from "../../img/epoch.png";
import correct from "../../img/correct.png";
import wrong from "../../img/wrong.png";

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
        //paddingBottom:'20px',
    },
    imageFormat2: {
        paddingBottom:'30px',
    },
    imageFormat3: {
        paddingTop:'20px',
    },
}));

const FinalUpdate = ({ tagChange }) => {
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
                The goal of our project is to train a convolutional neural network (CNN) to detect the digits of a house number displayed on the streets. 
                This is a basic image recognition that can be useful in many different fields. We were able to train our neural network to perform multi-digit recognition with an accuracy rate of 94.2%.<br></br><br></br>
                </Typography>
            </Box>
            <img className={classes.imageFormat} src={teaser} alt="..."></img>
            <Box className={classes.boxFormat}>
                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Introduction
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                As shown in the image above, our project targets images of house numbers displayed on the streets, 
                we hope to achieve reasonable results given a variety of resolutions of the images. 
                Digit recognition is becoming increasingly important in various domains as technology advances. 
                Whether it is a mapping company needing to match images of house numbers to their geolocations, 
                or a robot trying to locate itself through room numbers/house numbers, 
                SVHN serves as a good basic dataset to dive into the world of image recognition. 
                We wanted to implement our project from scratch to understand how to preprocess the dataset as well as 
                to gain a deeper understanding of how to set up and train our own neural network. 
                Most existing ways of recognizing street view house numbers include two steps after locating where the numbers are within a picture: 
                slicing each digit and recognizing. The ways some other projects built the neural network rely on preprocessing the picture to make boxes around each digit, 
                and can only recognize individual digits. The output layers of their convolutional neural networks have 11 neurons, 
                each corresponding to a possible digit (ten of which represent zero to nine, and the last one represent none). 
                Our approach only has one step after locating the numbers in the pictures. We directly feed the portion of the image with all the numbers into the network, 
                and train the network to predict all of the numbers at the same time.
                </Typography>

                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Approach
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                The first step was to preprocess the data from <a href="http://ufldl.stanford.edu/housenumbers/">The Street View House Numbers (SVHN) Dataset</a>. We first focused on the first part of the dataset, where colored house-number images are given, and the bounding box for each digit is given in a .mat file. The general steps we took to preprocess the image dataset are to: limit the maximum number of digit to 5 (there is only one image that has 6 digits in the picture), make a new bounding box given the min and max values of the x and y values for all bounding boxes of all digits, expand the bounding box in each direction by 30% to ensure the coverage of all digit details. After preprocessing all the images of the dataset, we chose to use Tensorflow.Keras to help us construct the CNN as it has many predefined methods to build the architecture. <br></br><br></br>
                As introduced in the midterm update, we were able to preprocess the images and store them in a .h5 file. The data contains cropped street view house number images of size 32x32 and their corresponding labels in the form of 5 elements lists. Each of these label lists contains 5 integers, ranging from 0 to 10, with 0 to 9 representing the actual number shown in the image, and 10 being a placeholder for images that have less than 5 numbers (If "19" appears in the image, the label list would be: [1, 9, 10, 10, 10]). To construct the CNN architecture, we began by defining the input and output layers. Our input would be the preprocessed images, which have size 32x32x3. Finding the way to construct the output layer was less intuitive for us. Common classification CNN selects and condenses important features in hidden layers, and makes the number of neurons on the output layer correspond to the number of classes the data belongs to. In this case, as each element in our labels ranges from 0 to 10, there should be 11 classes, which correspond to 11 neurons on the output layer, and the list containing the correct information for the output layer to compare with should contain 11 elements. This does not coincide with our label data set, as each of these label lists contain 5 elements. Therefore, we first further processed our labels and converted them using the one-hot encoding method. Each of these 5x1 label lists then becomes a 5x11 list, with ten 0s and one 1 located on the index corresponding to this label. Shown below is an example of how the label "19" is represented in the original label list as well as the one-hot format. <br></br>
                </Typography>
        </Box>
        <Typography>One-Hot Encoding</Typography>
        <img className={classes.imageFormat} src={oneHot} alt="..."></img>
        <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                With the help of this, we further designed the output layer of the network to also be in the dimension of 5x11. 
                We individually connected 5 separate softmax densely-connected layers with 11 neurons each to their previous common fully connected layer. 
                Then we concatenated them and reshaped them into the size of 5x11.<br></br>
                </Typography>
        </Box>
        <Typography>Design of Output Layer</Typography>
        <img className={classes.imageFormat2} src={softmax} alt="..."></img>
        <Box className={classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                After settling down our input and output layers, we started to construct the hidden layers. Considering that our dataset is only recognizing numbers, which do not have very complex featured shapes and patterns, but there are 11 possible categories, we decided to use 3 convolutional layers, each is followed by 3 pooling layers, and there are 2 fully connected layers at the end. For each of these convolutional layers, we used Rectified Linear Unit(ReLU) as our activation function, as it allows an arbitrary amount of output, which corresponds to our scenario of wanting to classify into many classes. The convolutional layers have 64, 128, 256 filters, with a 7x7, 5x5, 3x3 dimension of kernel respectively. As the dimension of the kernel represents the height and width of the 2D convolution window, we decided to gradually decrease it while increasing the amount of filters to capture more essential details. As for padding, we wanted the results coming out from the first layer to preserve spatial dimensions of the volume, so we set padding to be the same for the first layer. For the second and the third, as the layers gradually identified important features, we set the padding to valid to allow the spatial dimensions to reduce via the natural application of convolution.
                <br></br>
                <br></br>
                Before each of these convolutional layers, we performed a batch normalization to preprocess their input, reduce the internal covariate shift, and increase the learning efficiencies. Following each convolutional layer, we used Max Pooling with a size of 2x2 to reduce the spatial dimensions of the output volume. After this, we wanted to increase the challenges for the network to learn the data by randomly dropping out some neurons on each layer, so we made each of these max pooled layers dropout with a rate of [0.3, 0.3, 0.5] respectively. For the fully connected layers. We first flattened the data and then applied two fully connected layers with sizes 1024 and 512, using them to combine the features and prepare for the final output.
                <br></br>
                </Typography>

        </Box>
        <Box className = {classes.boxFormat}>
                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Experimental and Qualitative Results
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                The input to the CNN is a set of 32x32x3 images, we conducted trials on black and white images first and found similar rates of success, we will be displaying the results of training and testing on colored images as this is more realistic and we do not expect users to preprocess images to black and white before using our model. Shown below is an image of the neural network model summary, showing the various layers and shapes.
                </Typography>
        </Box>
        <Typography>Model Summary</Typography>
        <img className={classes.imageFormat3} src={model} alt="..."></img>
        <Box className = {classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                After setting up our neural network as above, we spent a lot of time tuning the various things such as the number of drop out layers, the batch size, and the number of epochs ran. We found out that having more dropout layers increases the accuracy as the act of randomly dropping neurons increases the challenge for the network to learn the data, making the network record more essential details, and thus increasing its ability for generalization. The batch size was closely related to the number of epochs, as we realized that for a smaller batch size, a smaller value for epoch should be chosen for higher accuracy. We tested batch sizes of 16 and 64, varying the epoch value between 3, 19, 15, and 20. In the end, we chose a batch size of 64 and epoch value of 10 with the lowest loss towards the end and maximum accuracy. We tested two optimizers: Adam and Root Mean Square Propagation (RMSProp). We chose RMPSprop in the end as it tries to dampen the oscillations and automatically adjust the learning rates.
                </Typography>
        </Box>
        <Typography><br></br>Training Process</Typography>
        <img className={classes.imageFormat3} src={train} alt="..."></img>
        
        <Box className = {classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                As shown above, the accuracy increased as the loss decreased throughout the training. We decided that 10 epochs was the right value for a batch size of 64 as we realized beyond 10 epochs the loss started to increase and the accuracy decreased. The graphs for Epoch vs. accuracy/loss are shown below.
                </Typography>
        </Box>

        <Typography><br></br>Accuracy and Loss</Typography>
        <img className={classes.imageFormat3} src={epoch} alt="..."></img>

        <Box className = {classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                After evaluating our model with the testing dataset, we were able to achieve a rate of 94.2%. We then plotted some images along with their respective true and predicted labels to see the performance of our trained neural network. Shown below are 25 of correct predictions and 25 of wrong predictions. The wrongly predicted images show that our network struggled to distinguish between 1 and 7 and missed some digits at times. There seem to be some errors in the original labelling, which could have affected our model.
                <br></br>
                </Typography>
        </Box>

        <Typography>Correct Predictions</Typography>
        <img className={classes.imageFormat3} src={correct} alt="..."></img>
        <Typography><br></br>Wrong Predictions</Typography>
        <img className={classes.imageFormat3} src={wrong} alt="..."></img>

        <Box className = {classes.boxFormat}>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                These results are as expected, as the image resolution is not high, and with the images taken at different angles, it could even be hard for a human to recognize the number shown. Since we are not trying to detect the digits one by one, we don't expect our model to predict the correct number of digits for every image, as background details could be misidentified as a number potentially. Compared to a naive approach, which could perhaps make random decisions to predict the digits, our model performs much better. If the algorithm is to randomly predict the digits, the rate would be 1/(11)^N for N digits as there are a total of 11 digit possibilities (0 to 9, and None).
                <br></br>
                </Typography>
        </Box>

        <Box className = {classes.boxFormat}>
                <Typography align = 'center' variant = 'h4' className={classes.lateTitleFormat}>
                    Conclusion and Future Work
                </Typography>
                <Typography align='left' variant='subtitle1' className={classes.titleParagraphFormat2}>
                Being the first CNN we have designed from scratch, we are reasonably satisfied with an accuracy of 94.2%. For future work, we believe that our model can be extended and the parameters can be tuned for better accuracy. As time was limited, we did not tune the parameters as much as we would have liked. Preprocessing could also be improved by improving the potential lighting/angle of the images. By preprocessing the images further, we could enhance some of the details of the digits and reduce the impact of background details on training. Having some problems predicting the correct number of digits was a problem as our model does not predict digit by digit but rather the entire number at once. Overall, we believe that this project has been a success.<br></br><br></br><br></br>
                </Typography>
        </Box>
        

        
        </div>
    )
}

export default FinalUpdate;