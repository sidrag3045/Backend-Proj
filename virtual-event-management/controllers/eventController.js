const Event = require('../models/events');

const handleGetAllEvents = async (req, res) => {

    try {
        const events = await Event.find();
        res.status(200).json({message : "Events retrieved successfully", events : events});
    } catch (error) {
        res.status(500).json({message : "Error retrieving events", error : error});
    }
};

const handleCreateEvent = async (req, res) => {

    const {title, description} = req.body;
    
    if (!req.user.id) {
        return res.status(401).json({ message: "Unauthorized: User not logged in" });
      }
      
    try {
        const newEvent = await Event.create({title, description, participants: [], createdBy: req.user.id});
        res.status(201).json({message : "Event created successfully", event : newEvent});
    } catch (error) {
        res.status(500).json({message : "Error creating event", error : error});
    }
};

const handleGetEventById = async(req,res) => {

    const {id} = req.params;

    try {
        const event = await Event.findById(id);
        res.status(200).json({message : `Event with id : ${id} retrieved successfully`, event : event});
    } catch (error) {
        res.status(500).json({message : `Error retrieving event with id : ${id}`, error : error});
    }
};

const handleUpdateEventById = async(req,res) => {

    const {id} = req.params;
    const {title, description} = req.body;

    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, {title, description}, {new : true, timestamps: true});

        if(!updatedEvent){
            return res.status(404).json({message : `Event with id : ${id} not found`});
        }

        res.status(201).json({message : `Event with id : ${id} updated successfully`, event : updatedEvent});
    } catch (error) {
        res.status(500).json({message : `Error updating event with id : ${id}`, error : error});
    }
};

const handleDeleteEventById = async(req,res) => {

    const {id} = req.params;

    try {
        const deletedEvent = await Event.findByIdAndDelete(id);

        if(!deletedEvent){
            return res.status(404).json({message : `Event with id : ${id} not found`});
        }

        res.status(201).json({message : `Event with id : ${id} deleted successfully`, event : deletedEvent});
    } catch (error) {
        res.status(500).json({message : `Error deleting event with id : ${id}`, error : error});
    }
};

const handleRegisterForEvent = async (req, res) => {

    const { id } = req.params;
  
    try {
      const event = await Event.findById(id);
      if (!event) return res.status(404).json({ message: "Event not found" });
  
      if (event.participants.includes(req.user.id)) {
        return res.status(400).json({ message: "Already registered" });
      }
  
      event.participants.push(req.user.id);
      await event.save();
  
      res.status(201).json({ message: "Successfully registered for event" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

module.exports = { handleGetAllEvents, handleCreateEvent, handleGetEventById, handleUpdateEventById, handleDeleteEventById, handleRegisterForEvent };