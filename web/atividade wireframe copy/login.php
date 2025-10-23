<?php
session_start();
include("conexao.php");

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT * FROM usuarios WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $usuario = $result->fetch_assoc();
  
  if (password_verify($senha, $usuario['senha'])) {
    // salva nome e email na sessão
    $_SESSION['nome'] = $usuario['nome'];
    $_SESSION['email'] = $usuario['email'];
    
    // redireciona pra página inicial
    header("Location: index.php");
    exit();
  } else {
    echo "<script>alert('Senha incorreta!'); window.location.href='login.html';</script>";
  }
} else {
  echo "<script>alert('Usuário não encontrado!'); window.location.href='login.html';</script>";
}

$conn->close();
?>
