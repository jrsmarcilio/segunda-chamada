/*

  FACILITANDO A CRIAÇÃO TA TABLE DO PROJETO

  CREATE TABLE segundaChamada
  (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(50) NOT NULL,
    curso VARCHAR(50) NOT NULL,
    dia_ausente DATE,
    observacoes VARCHAR(255),
    file VARCHAR(500) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
*/
