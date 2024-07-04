import {test as baseTest} from '@playwright/test'

type MyFixtures = {
    fixture1 : any
}

type MyWorkerFixture = {
    workerFixture1 : any
}
export const test = baseTest.extend<MyFixtures,MyWorkerFixture>({
    fixture1: async({},use) => {
        const fixture1 = "This is fixture 1"
        console.log('Before part of fixture 1')
        await use(fixture1)
        console.log('After part of fixture 1')
    },

    workerFixture1: [async({},use) => {
        const workerFixture1 = "This is worker fixture 1"
        console.log('Before part of worker fixture 1')
        await use(workerFixture1)
        console.log('After part of worker fixture 1')
    },{scope:'worker'}]
})