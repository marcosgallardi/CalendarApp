const crearUsuario = (req, res) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "El nombre debe tener mas de 5 caracteres",
    });
  }

  res.json({
    ok: true,
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res) => {
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const revalidarToken = (req, res) => {
  res.json({
    ok: true,
    msg: "new token",
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
