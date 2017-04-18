describe('Protractor-Jasmine', function () {
    var sign_in = element(by.css('a[href="/login"]')),
        username = element(by.id('login_field')),
        password = element(by.id('password')),
        login = element(by.css('input[value="Sign in"]')),
        profile = element.all(by.css('a[href="/sarthakmehta10"]')).get(0),
        signed_as = element(by.css('strong[class="css-truncate-target"]'));
    it('Log in and check the user', function () {
        browser.ignoreSynchronization = true;
        return browser.get('https://github.com')
            .then(function () {
            return browser.driver.manage().window().maximize();
        })
            .then(function () {
            return sign_in.click();
        })
            .then(function () {
            return username.sendKeys('sarthakmehta10');
        })
            .then(function () {
            return password.sendKeys('s@rth@k123');
        })
            .then(function () {
            return login.click();
        })
            .then(function () {
            return profile.click();
        })
            .then(function () {
            return expect(signed_as.getText()).toEqual('sarthakmehta10');
        });
    });
});
