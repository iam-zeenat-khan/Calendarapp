
import { useState } from "react";

const EditEventModal = ({ isOpen, event, onSave, onClose }) => {
    const [formData, setFormData] = useState(event);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = () => {
      onSave(formData); // Pass updated event data back to parent
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Edit Event</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            placeholder="Start Time"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            placeholder="End Time"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Optional Details"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          ></textarea>
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default EditEventModal