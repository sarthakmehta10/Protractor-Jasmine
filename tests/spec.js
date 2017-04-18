describe('Protractor-Jasmine', function () {
    var sign_in = element(by.css('a[href="/login"]')),
        username = element(by.id('login_field')),
        password = element(by.id('password')),
        login = element(by.css('input[value="Sign in"]')),
        profile = element.all(by.css('a[href="/sarthakmehta10"]')).get(0),
        signed_as = element(by.css('strong[class="css-truncate-target"]'));
    it('Log in and check the user', function () {
        browser.ignoreSynchronization = true;
        browser.get('https://github.com');
        browser.driver.manage().window().maximize();
        sign_in.click();
        username.sendKeys('sarthakmehta10');
        password.sendKeys('s@rth@k123');
        login.click();
        profile.click();
        expect(signed_as.getText()).toEqual('sarthakmehta10');
    });
});