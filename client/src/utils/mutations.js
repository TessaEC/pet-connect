const { gql } = require('@apollo/client');

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            shelter {
                _id
                email
                password
            }
        }
    }
`;

export const LOGOUT_USER = gql`
    mutation LogoutUser {
        logout {
            token
            shelter {
                _id
                email
                password
            }
        }
    }
`;

// export const GET_AVAILABLE_PETS = gql`
//     query GetAvailablePets {
//         availablePets {
//             id
//             petName
//             type
//             breed
//             age
//             sex
//             furColor
//             image
//             status
//             shelterName
//         }
//     }
// `;

export const ADD_SHELTER = gql`
    mutation AddShelter($shelterName: String!, $email: String!, $password: String!, $city: String!, $phone: String!) {
        addShelter(shelterName: $shelterName, email: $email, password: $password, city: $city, phone: $phone) {
            token
            shelter {
                _id
                email
                password
                shelterName
                city
                phone
            }
        }
    }
`;

// export const UPDATE_PET = gql`
//     mutation UpdatePet($petId: ID!) {
//         updatePet(petId: $petId) {
//             _id
//             petName
//             type
//             breed
//             age
//             sex
//             furColor
//             image
//             status
//         }
//     }
// `;

export const REMOVE_PET = gql`
    mutation RemovePet($petId: ID!) {
        removePet(petId: $petId) {
            _id
            petName
            type
            breed
            age
            sex
            furColor
            image
            status
        }
    }
`;

export const ADD_PET = gql`
    mutation AddPet($petName: String!, $type: String!, $breed: String!, $age: String!, $sex: String!, $furColor: String!, $image: String, $shelterName: String) {
        addPet(petName: $petName, type: $type, breed: $breed, age: $age, sex: $sex, furColor: $furColor, image: $image, shelterName: $shelterName) {
            _id
            petName
            type
            breed
            age
            sex
            furColor
            image
            shelter {
                shelterName
            }
        }
    }
`;




