let bimehKol = 0.3;
let maliat = 0.1;
let bimehBikari = 0.03;
let bimehKargar = 0.07;
let bimehKarfarma = 0.23;

function formatNumber(input) {
  let value = input.value.replace(/\D/g, "");

  if (value) {
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  input.value = value;
}

function salaryCalculate() {
  let salary = document.getElementById("user-salary").value;
  salary = salary.replace(/,/g, "");
  salary = parseInt(salary);
  let salary_bimehKol = salary * bimehKol;
  const number_bimehKol = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(salary_bimehKol);
  document.getElementById("salaryBimehKol").value = number_bimehKol;

  salary_maliat = (salary - 10000000) * maliat;
  const number_maliat = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(salary_maliat);
  document.getElementById("salaryMaliat").value = number_maliat;

  salary_bimehBikari = salary * bimehBikari;
  const number_bimehBikari = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(salary_bimehBikari);
  document.getElementById("salaryBimehbikari").value = number_bimehBikari;

  salary_bimehKargar = salary * bimehKargar;
  const number_bimehKargar = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(salary_bimehKargar);
  document.getElementById("salaryBimehKargar").value = number_bimehKargar;

  salary_bimehKarfarma = salary * bimehKarfarma;
  const number_bimehKarfarma = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(salary_bimehKarfarma);
  document.getElementById("salaryBimehKarfarma").value = number_bimehKarfarma;

  salary_khales = salary - salary_maliat - salary_bimehKargar;
  const number_khales = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(salary_khales);
  document.getElementById("salaryKhales").value = number_khales;
}
