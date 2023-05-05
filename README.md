# ChitChat

### Introduction:
Chitchat is a web-based social media application that facilitates user interaction and content sharing. The application empowers users to create posts, react to other user's posts, and engage in meaningful conversations with the community. 

## Tools used in achieving this application
A variety of tools were leveraged to bring the application to fruition. They include:
- Vite
- React
- Chakra UI
- React Icons
- Firebase

## How I achieved this:

To achieve a seamless user experience, 
- A Firebase project was created and the necessary Firebase products were enabled.
- Firebase Authentication was implemented, and email/password sign-in method was enabled.
- Firestore Database was utilized to store the application's data such as posts, likes and comments while 
- Firebase Storage was used to store the media files such as profile pictures. 
- The Firebase SDKs were integrated into the application, and the app's features were developed.

## How the app works:

- Upon visiting the Chitchat homepage, users are presented with a landing page where they can choose to log in or sign up. 
- Once authenticated, users can engage with other users, read, like, or comment on posts, and view other users' profiles. 
- Users can only delete their posts and comments, and not that of other users. 
- Additionally, users can modify their profile, including changing their avatar to any image of their choosing.
- Finally, a list of all registered users is available, allowing users to explore other profiles.

## Why I built the project this way:

- As a frontend developer, I chose to implement Firebase Database and Storage to provide a backend solution for the application. This solution facilitated the storage of user-generated content and streamlined the API calls required to fetch data into the application. 
- The react-firebase-hooks library was utilized, which leveraged React Hooks to streamline integration with Firebase. 
- React-hook-form library was also implemented for form validation, ensuring that the application was both performant and reliable. 
- Chakra UI was selected to style the web application due to its modern and responsive design language, which provided a cohesive user experience.

## If I had more time I would change this:

Given additional time, several modifications could be implemented to enhance the user experience. 
- Authentication with Google could be enabled, allowing for a more seamless login process. 
- Additionally, users could be enabled to upload and share images. 
- Lastly, to ensure the long-term stability of the application, a testing framework such as Jest could be implemented to proactively prevent potential bugs and ensure code reliability.
