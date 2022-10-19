function validacaoLogin() {
  const email = document.getElementById('email');
  const invalidEmail = email.value !== 'tryber@teste.com';

  const password = document.getElementById('password');
  const invalidPassword = password.value !== '123456';

  if (invalidEmail || invalidPassword) {
    return false;
  }
  return true;
}
const inputLogin = document.getElementById('input-login');

function validacaoAlert(event) {
  event.preventDefault();
  const validacao = validacaoLogin();
  if (validacao === false) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const checkbox = document.getElementById('agreement');
const statusButton = document.getElementById('submit-btn');

statusButton.disabled = true;

checkbox.addEventListener('change', () => {
  if (checkbox.value === '') {
    statusButton.disabled = true;
  } else {
    statusButton.disabled = false;
  }
});

inputLogin.addEventListener('click', validacaoAlert);
validacaoLogin();

const text = document.getElementById('textarea');
let JSremaining = document.getElementById('counter');
const valueRemaining = 500;

text.addEventListener('input', () => {
  const { length } = text.value;
  const charactersLeft = valueRemaining - length;
  JSremaining = charactersLeft;
  document.getElementById('counter').innerText = JSremaining;
});

inputLogin.addEventListener('click', validacaoAlert);
validacaoLogin();

const name = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const emailForm = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.getElementsByClassName('family-option');
const conteudo = document.getElementsByClassName('subject');
const avaliacao = document.getElementsByClassName('avaliacao-option');
const textarea = document.getElementById('textarea');

function Checked() {
  const conteudoArray = [];
  for (let index = 0; index < conteudo.length; index += 1) {
    if (conteudo[index].checked === true) {
      conteudoArray.push(` ${conteudo[index].value}`);
    }
  }
  return conteudoArray;
}

function avaliacaoChecked() {
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked === true) {
      return avaliacao[index].value;
    }
  }
}

function familyChecked() {
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked === true) {
      return familia[index].value;
    }
  }
}
const formData = document.getElementById('form-data');
function preencheForm() {
  const dados = [
    { dado: 'Nome', value: `${name.value} ${sobrenome.value}`, class: 'nome' },
    { dado: 'Email', value: emailForm.value, class: 'email' },
    { dado: 'Casa', value: casa.value, class: 'casa' },
    { dado: 'Família', value: familyChecked(), class: 'familia' },
    { dado: 'Matérias', value: Checked(), class: 'subject' },
    { dado: 'Avaliação', value: avaliacaoChecked(), class: 'nota' },
    { dado: 'Observações', value: textarea.value, class: 'observacao' },
  ];

  for (let index = 0; index < dados.length; index += 1) {
    const novoDado = document.createElement('p');
    novoDado.innerHTML = `${dados[index].dado}: ${dados[index].value}`;
    novoDado.className = dados[index].class;
    formData.appendChild(novoDado);
  }
}

function alterandoForm(event) {
  const form = document.getElementById('evaluation-form');
  event.preventDefault();
  form.style.display = 'none';
  formData.style.display = 'block';
  preencheForm();
}
statusButton.addEventListener('click', alterandoForm);
