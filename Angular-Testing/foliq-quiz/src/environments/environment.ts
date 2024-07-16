const BASE_URL = 'https://api.airtable.com/v0/appjD3ZsQFD6Lb9D7';
const BASE_ID = 'appjD3ZsQFD6Lb9D7';

export const environment = {
    firebase: {
        "projectId":"foliq-quiz",
        "appId":"1:172026101893:web:33d6dabae79af0084029ec",
        "storageBucket":"foliq-quiz.appspot.com",
        // "locationId":"us-central",
        "apiKey":"AIzaSyCeGxaA7egyQQ5o5cN1W_vIeZdzQmnqyEk",
        "authDomain":"foliq-quiz.firebaseapp.com",
        "messagingSenderId":"172026101893"
    },
    airtable: {
        privateAccessToken: 'patOxK3aX3qlbbKpx.884c70d8d90db6e40ec31960795cb682016f5f32623916d406437f8a1e722c3b',
        baseURL: BASE_URL,
        baseID: BASE_ID,
        userTable: {
            name: 'userTable',
            URL:  BASE_URL + 'userTable',
        },
        picturesTable: {
            name: 'picturesTable',
            URL:  BASE_URL + 'picturesTable',
        },
        userProfileTable: {
            name: 'userProfileTable',
            URL:  BASE_URL + 'userProfileTable',
        },
        lifestyleTable: {
            name: 'lifestyleTable',
            URL:  BASE_URL + 'lifestyleTable',
        },
        preferencesTable: {
            name: 'preferencesTable',
            URL:  BASE_URL + 'preferencesTable',
        },
        finalTable: {
            name: 'final',
            URL:  BASE_URL + 'final',
        },
    }
}