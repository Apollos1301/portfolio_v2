import React from "react";
import {
  BrowserView,
  MobileView,
  useMobileOrientation,
} from "react-device-detect";

import BrowserSection from "./BrowserSection";
import MobileSection from "./MobileSection";

var myProjects = [
  {
    name: "Burned Calories Prediction",
    description:
      "In this project, I worked with an 'Exercise and Burned Calories' dataset. I performed data cleaning and created several visualizations to better understand the dataset. The primary focus of this project was to predict burned calories using three different machine learning and deep learning models. For each model, I trained it twice: once with all the features in the dataset and once with selected features based on the Chi-squared statistics of non-negative features for classification tasks.",
    link: "https://github.com/Apollos1301/calories_prediction",
  },
  {
    name: "Image classification and bounding-box regression",
    description:
      "In this project, I used a dataset consisting of images of butterflies, Dalmatians, and dolphins, along with their corresponding bounding boxes. I utilized the pre-trained CNN model VGG16 and fine-tuned it for my task. Additionally, I added two different model heads: a regression head to predict the x1, y1, x2, y2 coordinates of the bounding box, and a classification head to identify the animal in the image.",
    link: "https://github.com/Apollos1301/bb_regression",
  },
  {
    name: "Gender Prediction",
    description:
      "In this project, I used a dataset consisting of pictures of women and men. I developed a custom CNN model and trained it on the entire dataset without splitting it into training and testing sets.",
    link: "https://github.com/Apollos1301/gender_prediction",
  },
  {
    name: "Transformer from Scratch",
    description:
      "I developed a Transformer model from scratch using PyTorch and NumPy. I trained it on two different datasets: Multi30K and IWSLT2017, both for the task of translating from English to German.",
    link: "https://www.kaggle.com/work/collections/14013092",
  },
];
export default function ParaLayer() {
  const { isLandscape } = useMobileOrientation();

  return (
    <>
      <BrowserView>
        <BrowserSection projects={myProjects} />
      </BrowserView>
      <MobileView>
        {isLandscape ? (
          <BrowserSection projects={myProjects} />
        ) : (
          <MobileSection projects={myProjects} />
        )}
      </MobileView>
    </>
  );
}
