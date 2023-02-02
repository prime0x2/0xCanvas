export const getPosts = async () => {
    const req = await fetch('https://zeroxcanvas.onrender.com/api/v1/post');
    const res = await req.json();

    if (res.status === 'success') {
        return res.data.reverse();
    } else {
        return [];
    }
};


export const createPost = async (post) => {
    const req = await fetch('https://zeroxcanvas.onrender.com/api/v1/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    const res = await req.json();

    return res;
};


export const generateImage = async (prompt) => {
    const req = await fetch('https://zeroxcanvas.onrender.com/api/v1/dalle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });
    const res = await req.json();

    return res;
}