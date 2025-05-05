describe('Login Formu Testleri', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('Başarılı form gönderimi ile success sayfasına giderim', () => {
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('Test1234');
      cy.get('input[type="checkbox"]').check();
      cy.get('button').click();
      cy.contains('Giriş Başarılı').should('exist');
    });
  
    it('Hatalı email girildiğinde: uyarı gösterilmeli, buton pasif olmalı', () => {
      cy.get('input[type="email"]').type('test.com'); // geçersiz email
      cy.get('input[type="password"]').type('Test1234');
      cy.get('input[type="checkbox"]').check();
  
      cy.contains('Geçerli bir e-posta girmelisin.').should('exist');
      cy.get('p').should('have.length', 1);
      cy.get('button').should('be.disabled');
    });
  
    it('Email ve şifre hatalıysa 2 hata mesajı görünmeli, buton disabled olmalı', () => {
      cy.get('input[type="email"]').type('yanlisemail');
      cy.get('input[type="password"]').type('123'); // zayıf şifre
      cy.get('input[type="checkbox"]').check();
  
      cy.get('button').click();
  
      cy.get('p').should('have.length', 2).then(($ps) => {
        expect($ps.eq(0).text()).to.contain('Geçerli bir e-posta');
        expect($ps.eq(1).text()).to.contain('Şifre min 8 karakter');
      });
  
      cy.get('button').should('be.disabled');

      it('Email ve şifre doğru ama checkbox seçili değilse buton disabled olmalı', () => {
        // Geçerli email ve şifre giriyoruz
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('Test1234');
      
        // Checkbox bilerek işaretlenmiyor!
      
        // Hata mesajı görünmemeli
        cy.get('p').should('not.exist');
      
        // Buton yine de pasif olmalı çünkü checkbox seçilmedi
        cy.get('button').should('be.disabled');
      });      
    });
  });  