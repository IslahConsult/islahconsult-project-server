import db from "../models";
export const regester = (req, res) => {
  console.log(req.body);
  const {
    query_type = "insert",
    id = "",
    first_name = "",
    last_name = "",
    email = "",
    gender = "",
    home_address = "",
    town = "",
    state = "",
    qualification = "",
    business_name = "",
    business_phone_number = "",
    business_email = "",
    type_of_business = "",
    business_register = "",
    capital_training = "",
  } = req.body;

  db.sequelize
    .query(
      `CALL mentorship(:query_type,:id,:first_name,:last_name,:email,:gender,:home_address,
        :town,:state,:qualification,:business_name,:business_phone_number,:business_email,
        :type_of_business,:business_register,:capital_training)`,
      {
        replacements: {
          query_type,
          id,
          first_name,
          last_name,
          email,
          gender,
          home_address,
          town,
          state,
          qualification,
          business_name,
          business_phone_number,
          business_email,
          type_of_business,
          business_register,
          capital_training,
        },
      }
    )
    .then((results) => {
      console.log(results);
      res.status(500).json({ results });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};

export const regester1 = (req, res) => {
  console.log(req.body);
  const { query_type = "insert", id = "" } = req.body;

  db.sequelize
    .query(`SELECT count(first_name) as users FROM mentorship`, {
      replacements: {
        query_type,
        id,
      },
    })
    .then((results) => {
      console.log(results);
      res.status(500).json({ results: results[0] });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};

export const getRegester = (req, res) => {
  db.sequelize
    .query(`SELECT * FROM mentorship`)
    .then((results) => res.json({ success: true, results: results[0] }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false, err });
    });
};
