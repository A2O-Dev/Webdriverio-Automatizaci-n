describe('Auto Cropping Restart', () => {
  it('should restart successfully', async () => {
    await browser.url('http://192.168.149.90/auto-cropping-cases')
    
    // login
    await $('#email').setValue('ariel.ayaviri@a2odev.com')
    await $('#password').setValue('Ariel123456$')
    await $('button[type="submit"]*=Login').click()

    await expect($('table.table tbody tr')).toBeExisting()

    const testCaseID = '1526891'

    await $('form .input-group input.form-control[type="text"][ng-model="cm.searchValue"]').setValue(testCaseID)
    await $('form .input-group .input-group-btn button[type="submit"]').click()

    await expect($('table.table tbody tr:first-child').$('td*='+testCaseID)).toBeExisting()
    await browser.pause(2000)

    await $('table.table tbody tr:first-child td:last-child').$('button.btn*=Details').click()

    await expect($('div.ai-case-eval-details .dropdown button#dropdownMenu1')).toBeExisting()
    await browser.pause(2000)

    await $('div.ai-case-eval-details .dropdown button#dropdownMenu1').click()
    
    await expect($('div.ai-case-eval-details .dropdown.open ul.dropdown-menu').$('a*=Restart Auto Cropping')).toBeExisting()
    await browser.pause(2000)

    await $('div.ai-case-eval-details .dropdown.open ul.dropdown-menu').$('a*=Restart Auto Cropping').click()

    await expect($('div.ai-case-eval-details div.alert.alert-info p')).toBeExisting()
    await browser.pause(30000)

    await expect($('div.ai-case-eval-details div.alert.alert-success p')).toBeExisting()

    await browser.pause(5000)

  })
})