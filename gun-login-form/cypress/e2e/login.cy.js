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
      
        // Hata mesajı görünmeli
        cy.contains('Geçerli bir e-posta giriniz.').should('exist');
      
        // Sadece 1 tane hata mesajı olmalı
        cy.get('p').should('have.length', 1);
      
        // Buton disabled olmalı
        cy.get('button').should('be.disabled');
      });
      
});