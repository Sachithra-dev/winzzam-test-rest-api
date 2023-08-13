const Month = require('../models/Month');

module.exports = {
    createMonth: async (req, res) => {
        const newMonth = new Month(req.body);

        try {
            const savedMonth = await newMonth.save();

            res.status(200).json(savedMonth);

        } catch (error) {
            res.status(500).json(error.message);
        }
    },

    getMonth: async (req, res) => {
        try {
            const job = await Month.findById(
                req.params.id
            );

            res.status(200).json(job);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllMonths: async (req, res) => {
        try {
            const month = await Month.find();

            res.status(200).json(month);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    searchMonths: async (req, res) => {
        try {
            const results = await Month.aggregate([
                {
                    $search: {
                        index: "default",
                        text: {
                            query: req.params.key,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]);

            res.status(200).json(results);
        } catch (error) {
            res.status(500).json("error happened");
        }
    }
}

 


