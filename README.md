# Clickr

Clickr, clone to the popuplar website Flickr, allows users to post, comment and click on content created by the community.  Share anything and allow others
to cherish your work. 


## Links
* [Live Site](https://clickrapp.herokuapp.com/)
* [Database Schema](https://github.com/jmartinezsal/clickr/wiki/Database-Schema)
* [MVP Feature List](https://github.com/jmartinezsal/clickr/wiki/MVP-Feature-List)


## Technologies Used

### Hosting Services
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

### Backend 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## How to get started
1. Clone this repository

<code>git clone https://github.com/jmartinezsal/clickr.git</code>

2. CD into the backend directory and install dependencies

<code>npm install</code>

3. CD into the frontend directory and install dependencies

<code>npm install</code>

4. Create a .env file based on the .env.example given

5. Create a user in psql based on your .env DB_USERNAME

<code>psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB" </code>

6. Create the database, migrate, and seed

  <code> npx dotenv sequelize db:create</code>

  <code> npx dotenv sequelize db:migrate</code>

  <code> npx dotenv sequelize db:seed:all </code>

7. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

  <code>npm start </code>
  
## Features 
 
## Splash Page & User Authentication



https://user-images.githubusercontent.com/96754787/167397557-b015620c-1cbb-47a8-82a6-55b0604aee16.mov


## User Home Page
  
### Navigation
  
Once the user is logged in, they can view all images posted on the app.

Clicking on one of the images will allow user to go to the specific image that displays all the information of the image and comments made by 
 others for that image. 
  
![Screen Shot 2022-05-09 at 3 58 46 AM](https://user-images.githubusercontent.com/96754787/167396645-bf22c3b4-04fc-4412-bad1-e17cd0680cf9.png)
 
## Images

A user can post a new image by clicking the upload icon in the navigation bar, edit the contents for an image they've posted, and delete 
  images they've posted.

* Edit and delete buttons only show up on hover to achieve a clean look on the site and create a pop up modal for the user to complete action. 
These features are available anywhere the image can be viewed...
  

https://user-images.githubusercontent.com/96754787/167397886-219ecf17-16e3-4234-86ae-862f8827dc05.mov

![Screen Shot 2022-05-09 at 4 09 42 AM](https://user-images.githubusercontent.com/96754787/167398096-d6f5ced0-b9c1-4991-8a2a-faad796d60e8.png)

 
## Comments 
A user can post a comment to other user's images, by clicking on the text area. 
  * Comments that are made by the user can also be edited and delted by the user by hovering through the divisions.  
  These buttons will appear if the belong to the user.
  
  

https://user-images.githubusercontent.com/96754787/167398861-f28ec7ed-feff-4c0e-b05c-52a6b3db619a.mov

##Page Not Found
  
Trying to access a path that does not exist will render a page not found component, 
and redirects the user to the home page automatically after 5 seconds.

  
![Screen Shot 2022-05-09 at 4 17 42 AM](https://user-images.githubusercontent.com/96754787/167399606-61fe561e-9c67-450b-af7f-64ed182c298e.png)

## Upcoming Features
  * Creating profile pages and allow for user to edit their information 
  * Add album features so users can save all their pictures in one area 
  * Createa a better image page that has more detail 
  * Creating a favorited picture that will store others people's images in a user's profile
  
  
  
  
  
  
  
  
  
  
  
  
