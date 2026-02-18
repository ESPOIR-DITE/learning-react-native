# Learning react native app
This is a practical learning path in React Native ecosystem. **Learning** is a React native application
that will keep track of locations by associating them to a code. 
When you need to find a location details you just provide the code that is associated with that location and the app should be able to provide the location details back.

At this stage the app will have to use the device storage to store the associated information.

Followings are the required knowledge field to have when contributing to this repository:
## Git
1. Fork this repository into your repository
    
If you want to this code into you repository for a seamless version control You are required to fork this repository. Check the following documentation to get more insight.
> Fork a repository [link](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)
2. Clone This Repository


When you fork a repository on GitHub.com, it exists as a remote repository in your git account. 
You can clone your repository to create a local copy on your computer and sync between the two locations.
[Read more](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Now to retrieve an entire repository from a remote location via URL. 
In this case i have used this repository's URL. 
You can use the URL on your forked repository. 
 > git clone https://github.com/ESPOIR-DITE/learning-react-native.git
 

## React Native
Once you get the project on your machine, you need to set the following tools for you to be able to run this application successfully:
1. Install **Nodejs**
2. Install **watchman** if you are developing on Mac computer.
3. Install Android studio on windows but on Mac you can install whether Android studio or Xcode
4. Install Expo with the following command:
   - Expo Go allows you to run your React Native app on a physical device without installing iOS and Android native SDKs.
    >npx expo install

5. Now Run the application
    - You should go to the root of the cloned application and run below command
      - > npm run android or npm run ios (macOS only)
6. Install Expo Go app on your phone
    - When you have Expo GO App installed on your app. You can run npm start to start you app.
    - The app will generate a QR code that you can scan with your phone to access the application.
