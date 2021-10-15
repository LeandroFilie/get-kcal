const form = document.getElementById('form');

function getValuesNumber(id){
  return Number(document.getElementById(id).value);
}

function getSelectedValue(id){
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function handleSubmit(event){
  event.preventDefault();
  
  const gender = getSelectedValue('gender')
  const age = getValuesNumber('age');
  const weight = getValuesNumber('weight');
  const height = getValuesNumber('height');
  const activityLevel = Number(getSelectedValue('activity_level'));

  // Taxa Metabólica Basal
  const tmb = Math.round(
    gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  )

  const maintenance = Math.round(tmb * activityLevel);
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  const html = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
  `;

  document.getElementById('result').innerHTML = html;

}

form.addEventListener('submit', handleSubmit)