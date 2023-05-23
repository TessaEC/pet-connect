import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
    {
        availablePets {
            id
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

export const QUERY_SHELTERS = gql`
    {
        shelters {
            id
            shelterName 
            email
            city
            phone
            pets {
                id
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

    }
`;


            