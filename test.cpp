#include <iostream>

using namespace std;

int arr[5][5];
bool vis[25][25];
int dx[] = {1, 0, 0, -1}, dy[] = {0, 1, -1, 0};
struct Node {
    int x;
    int y;
    string step;
};

class Queue {
    private:
        int length;
        int first;
        int last;
        Node *arr;

    public:
        Queue() {
            length = 0;
            first = 0;
            last = 0;
            arr = new Node[25];
        };

        void push(Node num) {
            arr[last++] = num;
            length++;
        };

        bool isEmpty() {
            return length == 0;
        };

        void pop() {
            first++;
            length--;
        };

        Node front() {
            return arr[first];
        };
};

bool judge(int i, int j) {
    if (i < 0 || j < 0 || i >= 5 || j >= 5 || vis[i][j] || arr[i][j] == 1) return false;
    return true;
};

void bfs() {
    Queue q;
    q.push({0, 0, ""});
    vis[0][0] = true;
    while (!q.isEmpty()) {
        Node top = q.front();
        if (top.x == 4 && top.y == 4) {
            for (int i = 0; i < top.step.size(); i+=2) {
                cout << "(" << top.step[i] << ", " << top.step[i + 1] << ")" << endl;
            }
            break;
        }   
        for (int i = 0; i < 4; i++) {
            int tx = top.x + dx[i];
            int ty = top.y + dy[i];
            if (judge(tx, ty)) {
                Node t;
                t.step += top.x + '0';
                t.step += top.y + '0';
                t.x = tx, t.y = ty;
                vis[tx][ty] = true;
                q.push(t);
            }
        }
        q.pop();
    }
};

int main() {
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            cin >> arr[i][j];
            vis[i][j] = false;
        }
    }
    bfs();
    return 0;
}