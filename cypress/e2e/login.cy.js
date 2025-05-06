describe('Login Formu Testleri', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('✅ Başarılı form gönderimi ile success sayfasına giderim', () => {
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('Test1234');
      cy.get('input[type="checkbox"]').check();
      cy.get('button').click();
      cy.contains('Giriş Başarılı').should('exist');
    });
  
    it('❌ Hatalı email girildiğinde: uyarı gösterilmeli, buton pasif olmalı', () => {
      cy.get('input[type="email"]').type('test.com'); // geçersiz email
      cy.get('input[type="password"]').type('Test1234');
      cy.get('input[type="checkbox"]').check();
  
      cy.contains('Geçerli bir e-posta girmelisin.').should('exist');
      cy.get('p').should('have.length', 1);
      cy.get('button').should('be.disabled');
    });
  
    it('❌ Email ve şifre hatalıysa 2 hata mesajı görünmeli, buton disabled olmalı', () => {
      cy.get('input[type="email"]').type('yanlisemail');
      cy.get('input[type="password"]').type('123'); // zayıf şifre
      cy.get('input[type="checkbox"]').check();
  
      cy.get('p').should('have.length', 2);
      cy.contains('Geçerli bir e-posta girmelisin.').should('exist');
      cy.contains('Şifre min 8 karakter olmalı, harf ve rakam içermeli.').should('exist');
  
      cy.get('button').should('be.disabled');
    });
  
    it('❌ Email ve şifre doğru ama checkbox seçili değilse buton disabled olmalı', () => {
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('Test1234');
  
      // Checkbox işaretlenmedi
      cy.get('p').should('have.length', 1);
      cy.contains('Şartları kabul etmelisin.').should('exist');
  
      cy.get('button').should('be.disabled');
    });
  });      