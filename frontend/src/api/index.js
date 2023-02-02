export const getPosts = async () => {
    const req = await fetch('https://zeroxcanvas.onrender.com/api/v1/post');
    const res = await req.json();

    if (res.success) {
        return {
            ...res,
            data: res.data.reverse()
        }
    } else {
        return res;
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

    if (!res.success) {
        console.log('🚨 Error creating post\n', res);
    }

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

    if (!res.success) {
        console.log('🚨 Error generating image\n', res);
    }

    return res;
}