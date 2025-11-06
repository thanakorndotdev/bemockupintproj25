module.exports = {
    // 404 – resource ไม่เจอ
    notFoundError(id, resource) {
        const err = new Error(`${resource} not found for ID ${id}`);
        err.code = 'NOT_FOUND';
        err.status = 404;
        return err;
    },

    // 409 – ซ้ำกับข้อมูลที่มีอยู่แล้ว
    duplicateItem(itemName, resource) {
        const err = new Error(`${resource} already exists for ${itemName}`);
        err.code = 'DUPLICATE_RESOURCE';
        err.status = 409;
        return err;
    },

    // 400 – ข้อมูลที่ส่งมาไม่ถูกต้อง
    badRequest(message = 'Invalid request data') {
        const err = new Error(message);
        err.code = 'BAD_REQUEST';
        err.status = 400;
        return err;
    },

    // 401 – ไม่ได้ login / token ผิด
    unauthorized(message = 'Unauthorized access') {
        const err = new Error(message);
        err.code = 'UNAUTHORIZED';
        err.status = 401;
        return err;
    },

    // 403 – login แล้วแต่ไม่มีสิทธิ์
    forbidden(message = 'Forbidden access') {
        const err = new Error(message);
        err.code = 'FORBIDDEN';
        err.status = 403;
        return err;
    },

    // 500 – error ฝั่งเซิร์ฟเวอร์ทั่วไป (เช่น Prisma ล้ม, DB ล่ม)
    internal(message = 'Internal server error') {
        const err = new Error(message);
        err.code = 'INTERNAL_SERVER_ERROR';
        err.status = 500;
        return err;
    },

    // 503 – เซิร์ฟเวอร์หลัก/DB down ชั่วคราว
    serviceUnavailable(message = 'Service temporarily unavailable') {
        const err = new Error(message);
        err.code = 'SERVICE_UNAVAILABLE';
        err.status = 503;
        return err;
    }
};
