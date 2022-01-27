import Grid from 'pages/grid/Grid'
import HongPlay from 'pages/hongPlay/HongPlay'
import SungPlay from 'pages/sungPlay/SungPlay'
import Users from 'pages/users/Users'

export const dynamic: {[key: string]: any} = {
  'HongPlay': HongPlay,
  'SungPlay': SungPlay,
  'Grid': Grid,
  'Users': Users
}