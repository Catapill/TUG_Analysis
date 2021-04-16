# TUG_Analysis
To be ran in Jupyter only tested for Notebook
## Dependancies
### TUG_Label
A system for manually labelling TUG data, allows for range of interest to be defined and sections to be labelled.
*Numpy
*Pandas
*Plotly
*Matplotlib
*Requests
*Json
### Synth_data
A system that takes the training data and creates four noise altered data sets.
*Numpy
*Pandas
*Matplotlib
*Operator
*CSV
### TUG_GPC
A Gaussian Process Model for automatically segmenting TUG tests.
*Numpy
*Pandas
*Matplotlib
*Plotly
*Sklearn
*Statistics
### TUG_CNN
A Convolutional Neural Network for automatically segmenting TUG tests.
*Numpy
*Pandas
*Matplotlib
*Plotly
*Sklearn
*Statistics
*Keras
* View Label data on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/TUG_Label.ipynb?flush_cache=true
* View Gaussian Process Classifier on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/TUG_GPC.ipynb?flush_cache=true Model performs at 95.15% average accuracy using 10 test data cuts.
* View the CNN on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/TUG_CNN.ipynb?flush_cache=true Model performs at 96.08% average accuracy.
* View Synthetic data on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/Synth_data.ipynb
