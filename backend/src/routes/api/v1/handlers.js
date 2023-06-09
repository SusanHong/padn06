import { generateToken } from "../../../csrf";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function getCsrfToken(req, res) {
  // we generate csrf secret based on session.id,
  // so token for userA won't work for userB
  const csrfToken = generateToken(res, req);
  req.session.init = true;
  res.json({ csrfToken });
}
export async function createOneUser(req, res) {
  const user = await prisma.user.create({ data: { name: req.body.name } });
  return res.status(201).json(user);
}
