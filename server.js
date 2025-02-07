const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hacking-terminal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Register a new user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.json({ message: 'User registered successfully' });
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'secretkey');
    res.json({ token });
});

// Admin panel - Get all users
app.get('/admin/users', authenticate, async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json({ message: 'Forbidden' });

    const users = await User.find({}, { password: 0 });
    res.json(users);
});

// Admin panel - Delete a user
app.delete('/admin/users/:id', authenticate, async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json({ message: 'Forbidden' });

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});