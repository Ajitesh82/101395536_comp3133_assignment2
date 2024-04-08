import { gql } from "graphql-tag"

const addEmp = gql`mutation AddNewEmployee($firstName: String!, $lastName: String!, $email: String!, $salary: Float!, $gender: String) {
    createNewEmployee(first_name: $firstName, last_name: $lastName, email: $email, salary: $salary, gender: $gender) {
      first_name
      last_name
      email
      gender
      salary
    }
  }`;

const deleteEmp = gql`mutation DeleteEmployeeById($eid: ID!) {
    removeEmployeeById(eid: $eid) {
      email
    }
  }`;

  const getAllEmp = gql`query GetAllEmployees {
    fetchAllEmployees {
      _id
      first_name
      last_name
      email
      gender
      salary
    }
  }`;

  const editemp = gql`mutation UpdateEmployeeById($eid: ID!, $firstName: String, $lastName: String, $email: String, $gender: String, $salary: Float) {
    modifyEmployeeById(eid: $eid, first_name: $firstName, last_name: $lastName, email: $email, gender: $gender, salary: $salary) {
      email
    }
  }`;

  const login = gql`mutation Login($usernameOrEmail: String!, $password: String!) {
    loginUser(usernameOrEmail: $usernameOrEmail, password: $password) {
      email
    }
  }`;

  const register = gql`mutation Signup($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      email
      username
    }
  }`;
export { getAllEmp , addEmp, editemp, deleteEmp, login, register };