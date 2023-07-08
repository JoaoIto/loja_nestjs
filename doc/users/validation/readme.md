# **Vamos recapitular o que fizemos até agora nesta aula:**

- Criamos o decorator e o usamos em CriaUsuario.dto.ts


- Criamos a classe de validação EmailEhUnicoValidator, que implementa a interface ValidatorConstraintInterface


- Transformamos essa classe em um provider, usando @Injectable


- Configuramos essa classe com uma validação assíncrona, com o decorator de @ValidatorConstraint


- Adicionamos o provider no módulo usuario.moddule.ts e, aparentemente, já podemos utilizá-lo

---