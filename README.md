# TUG_Analysis
## aiAnalysis
* To be ran in Jupyter only tested for Notebook
* Label training was just a temporary way for me to label the data for the machine learning models. All data sources can be found in the data folder, other csv files have been generated using them.
### Dependancies
#### TUG_Label
A system for manually labelling TUG data, allows for range of interest to be defined and sections to be labelled.
* Numpy
* Pandas
* Plotly
* Matplotlib
* Requests
* Json
#### Synth_data
A system that takes the training data and creates four noise altered data sets.
* Numpy
* Pandas
* Matplotlib
* Operator
* CSV
#### TUG_GPC
A Gaussian Process Model for automatically segmenting TUG tests.
* Numpy
* Pandas
* Matplotlib
* Plotly
* Sklearn
* Statistics
#### TUG_CNN
A Convolutional Neural Network for automatically segmenting TUG tests.
* Numpy
* Pandas
* Matplotlib
* Plotly
* Sklearn
* Statistics
* Keras
### Viewing Links
* View Label data on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/aiAnalysis/TUG_Label.ipynb?flush_cache=true
* View Gaussian Process Classifier on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/aiAnalysis/TUG_GPC.ipynb Model performs at 95.15% average accuracy using 10 test data cuts.
* View the CNN on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/aiAnalysis/TUG_CNN.ipynb Model performs at 96.08% average accuracy.
* View Synthetic data on https://nbviewer.jupyter.org/github/Catapill/TUG_Analysis/blob/main/aiAnalysis/Synth_data.ipynb
## csvDataApi
* This folder contains files using NodeJS that link to the Amazon RDS (Relational Database Services) via postgreSQL collects the CSV data uploaded and sends the information to an AWS instance which is then displayed through an API in JSON format (link to API  : http://18.191.179.60:3000/getData) this makes it possible to view the data anywhere anytime and can be used to show the data visually, for example we have used jupyter notebook to give a visual representation of the data. There is no installation instruction needed for this as it accessible anywhere and anytime due the data being on a cloud-based server.  
Files
*	db.JS – This file connects to the PostgreSQL and gathers the data for the API
 
* Package.JSON - This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

* Package-lock.JSON - This is automatically generated for any operations where npm modifies either the node_modules tree. 

* Node_modules – This is file stores all of the Node JS packages. 

Dependencies used
*	NodeJS (Create API)
*	PostgreSQL (Amazon Relational Database service connection)
*	Putty (AWS Cloud Server connection used to install various packages on the server)
*	Filezilla(Cloud based File server connection, used for uploading files to sever)
*	Pgadmin 4 (Management tool for postgreSQL)
*	Amazon Web Services (AWS) (Used for creating the database and instances server)

# Axivity Web Platform

Web Platform for Axivity User Interface

## Tools Required
- Intellij/ Eclipse
- Java JDK 11 or higher
- pgAdmin4 & postgres

## Description
The Axivity web application is a visual tool for the Axivity devices. Upon pushing your data to the data repo, here you will be able to visualise said data.
