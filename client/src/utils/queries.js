import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
    {
        pets {
            _id
            petName
            type
            breed
            age
            sex
            furColor
            image
            status
            shelter {
                shelterName
            }
    }
}
`;

export const QUERY_SHELTERS = gql`
    {
        shelters {
            _id
            shelterName 
            email
            password
            city
            phone
            pets {
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

    }
`;


            