# TUG_Analysis

- [TUG_Analysis](#tug_analysis)
  - [aiAnalysis](#aianalysis)
    - [Dependancies](#dependancies)
      - [TUG_Label](#tug_label)
      - [Synth_data](#synth_data)
      - [TUG_GPC](#tug_gpc)
      - [TUG_CNN](#tug_cnn)
    - [Viewing Links](#viewing-links)
  - [csvDataApi](#csvdataapi)
  - [Axivity Web Platform](#axivity-web-platform)
    - [Tools Required](#tools-required)
    - [Description](#description)
  - [Node.j_server](#nodej_server)
  - [cwa-file-uploader](#cwa-file-uploader)
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
*	db.JS ??? This file connects to the PostgreSQL and gathers the data for the API
 
* Package.JSON - This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

* Package-lock.JSON - This is automatically generated for any operations where npm modifies either the node_modules tree. 

* Node_modules ??? This is file stores all of the Node JS packages. 

Dependencies used
*	NodeJS (Create API)
*	PostgreSQL (Amazon Relational Database service connection)
*	Putty (AWS Cloud Server connection used to install various packages on the server)
*	Filezilla(Cloud based File server connection, used for uploading files to sever)
*	Pgadmin 4 (Management tool for postgreSQL)
*	Amazon Web Services (AWS) (Used for creating the database and instances server)

## Axivity Web Platform

Web Platform for Axivity User Interface

### Tools Required
- Intellij/ Eclipse
- Java JDK 11 or higher
- pgAdmin4 & postgres

### Description
The Axivity web application is a visual tool for the Axivity devices. Upon pushing your data to the data repo, here you will be able to visualise said data.

avaiable at: http://172.31.18.62:8080/axivity

## Node.j_server
It is a server responsible for posting files into the database. It has to be separate from the user interface because packages that are used for connection must use Node.js runtime. I attempted to use connection packages with Angular or React but in both instances I had issues with application build process. As it has to be running separately the setup is written in the Node.js_server folder README.md file.

## cwa-file-uploader
For it to work Node.js_server has to be running

It is still not implemented into general app but when it is launched it starts a page with a chose_file button
It only accepts .cwa files after which, POST request is instantly sent to the server and then to database where the file is stored.
As it is not yet implemented the setup is written in the cwa-file-uploader README.md file.
