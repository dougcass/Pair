var slotModel = require('../models/slotModel.js');

/**
 * slotController.js
 *
 * @description :: Server-side logic for managing slots.
 */
module.exports = {

    /**
     * slotController.list()
     */
    list: function (req, res) {
        slotModel.find(function (err, slots) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting slot.',
                    error: err
                });
            }
            return res.json(slots);
        });
    },

    /**
     * slotController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        slotModel.findOne({_id: id}, function (err, slot) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting slot.',
                    error: err
                });
            }
            if (!slot) {
                return res.status(404).json({
                    message: 'No such slot'
                });
            }
            return res.json(slot);
        });
    },

    /**
     * slotController.create()
     */
    create: function (req, res) {
        var slot = new slotModel({
			startTime : req.body.startTime,
			endTime : req.body.endTime,
			owner : req.body.owner

        });

        slot.save(function (err, slot) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating slot',
                    error: err
                });
            }
            return res.status(201).json(slot);
        });
    },

    /**
     * slotController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        slotModel.findOne({_id: id}, function (err, slot) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting slot',
                    error: err
                });
            }
            if (!slot) {
                return res.status(404).json({
                    message: 'No such slot'
                });
            }

            slot.startTime = req.body.startTime ? req.body.startTime : slot.startTime;
			slot.endTime = req.body.endTime ? req.body.endTime : slot.endTime;
			slot.owner = req.body.owner ? req.body.owner : slot.owner;
			
            slot.save(function (err, slot) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating slot.',
                        error: err
                    });
                }

                return res.json(slot);
            });
        });
    },

    /**
     * slotController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        slotModel.findByIdAndRemove(id, function (err, slot) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the slot.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
