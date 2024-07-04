import {test} from '../../fixtures/CustomFixture'

test('Test 1 fixture',async({fixture1,workerFixture1}) => {
    console.log(fixture1)
    console.log(workerFixture1)
})

test('Test 2 fixture',async({fixture1}) => {
    console.log(fixture1)
})