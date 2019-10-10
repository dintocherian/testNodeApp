import { binding, given, then, when} from 'cucumber-tsflow';
import {assert} from 'chai';

@binding()
export class AccountSteps {
    private accountBalance: number = 0;

    @given(/A user starting to sign up/)
    public givenAnAccountWithStartingBalance() {
      console.log('rteached');
    }
  
    @when(/user enter the details (.*) and (.*)$/)
    public deposit(name: string, email: string) {
        console.log(name);
        console.log(email);
      console.log('success');
    }
  
    @then(/user account is registered/)
    public accountBalanceShouldEqual() {
     assert.equal('success', 'success');
    }

}