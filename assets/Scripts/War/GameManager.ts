import Plane from "./Plane";
import Bullet from "./Bullet";

export class GameManager {
    private m_planes : Object[];
    private m_bullets : Object[];
    private m_enemys : Object[];
    
    static m_ins : GameManager;
    static instance() : GameManager {
        return this.m_ins;
    }

    public newPlane() : Plane {
        return null;
    }

    public newBullet() : Bullet {
        return null;
    }

    public newEnemy() : Object {
        return null;
    }
}
