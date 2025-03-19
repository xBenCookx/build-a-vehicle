# Vehicle Builder CLI

## Overview

The Vehicle Builder CLI is a command-line tool built with TypeScript that allows users to create and manage various types of vehicles such as cars, trucks, and motorbikes. Users can either generate a new vehicle or interact with an existing one. Once selected, a variety of actions can be performed on the vehicle. This project demonstrates object-oriented programming (OOP) principles implemented in TypeScript. I also used the Xpert learning assistant application to help clean and review my code.

### Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

### Installation

1. Clone the repository with the following command:

   git clone repository-url

2. Change into the project directory:

   cd build-a-vehicle

3. Install the required dependencies:

   npm install

### Usage

To run the application, use the command:

npm start, and then follow the on-screen instructions to either create a new vehicle or select an existing one. Once a vehicle is chosen, you can perform a variety of actions related to it.

#### Creating a Vehicle

1. Select the type of vehicle: car, truck, or motorbike.
2. Provide the necessary details for the chosen vehicle:
   - **Car**: Enter the make, model, year, and color.
   - **Truck**: Specify attributes like towing capacity.
   - **Motorbike**: Provide details such as wheel size.

#### Vehicle Actions

Once the vehicle is created, you can perform the following actions:

- Start the engine
- Drive the vehicle
- Stop the engine
- **For Trucks**: Tow an object
- **For Motorbikes**: Perform a wheelie

After completing each action, you will return to the actions menu until you choose to exit.

### Video Tutorial

Watch the video tutorial here:  
[Video Tutorial](https://drive.google.com/file/d/1YLdfz1QjEZUd4ZPbqkXXy7LtiI2E52eR/view)

### License

MIT License

### Contributing

I welcome contributions to enhance the project! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   git checkout -b feature/your-feature-name

3. Make your changes and commit them:

   git commit -m "Add feature"

4. Push the changes to your branch:

   git push origin feature/your-feature-name

5. Open a pull request with a description of your modifications.

#### Contribution Guidelines

- Ensure that your code adheres to TypeScript and OOP best practices.
- Use descriptive and clear commit messages.
- Test your changes thoroughly before submitting a pull request.
- Contributions should focus on enhancing functionality, fixing bugs, or improving code clarity.
