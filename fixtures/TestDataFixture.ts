import {test as baseTest} from '@playwright/test'

type MyFixture = {
    loginData : any
    testData:any
}

export const test = baseTest.extend<MyFixture>({
    loginData:{
        username : 'Admin',
        password : 'admin123'
    },
    testData:[{
        firstName : 'Test',
        lastName : 'Code',
        email : 'testcodeautomate@gmail.com'
    }]
})

